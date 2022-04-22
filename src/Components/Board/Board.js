import React from 'react';

import { paddingBetweenRows } from '../common';
import TraineeList from '../TraineeList';
import BoardCell from '../BoardCell';
import Sheet from '../Sheet';
import Loading from '../Loading';
import Invalid from '../Invalid';
import styles from './styles';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hoveredTraineeIndex: -1,
      hoveredProblemIndex: -1,
      hoveredSheetIndex: -1,
    };
  }

  componentDidMount() {
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const { trainees, sheets, submissions, metadata } = data;
        this.setState({
          trainees,
          sheets,
          submissions,
          metadata,
          loading: false,
        });
      })
      .catch((_) => this.setState({ loading: false }));
  }

  render() {
    const {
      loading,
      trainees,
      sheets,
      submissions,
      metadata,
      hoveredTraineeIndex,
      hoveredProblemIndex,
      hoveredSheetIndex,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (!trainees || !sheets || !submissions || !metadata) {
      return <Invalid />;
    }

    const traineesCount = trainees.length;
    const problemsCount = sheets.reduce((acc, { problems }) => acc + problems.length, 0);

    const rtf = new Intl.RelativeTimeFormat('en', { style: 'long' });
    const relativeTime = Math.round((metadata.lastRun - new Date()) / (1000 * 60));
    const lastUpdate = rtf.format(relativeTime, 'minutes');

    return (
      <>
        <div className="board">
          <div className="trainees-section">
            <TraineeList
              trainees={trainees}
              problemsCount={problemsCount}
              lastUpdate={lastUpdate}
              hoveredTraineeIndex={hoveredTraineeIndex}
              onTraineeHover={() => ({})}
              // index => this.setState({ hoveredTraineeIndex: index })
            />
          </div>
          <div className="sheets-section">
            <div className="sheets">
              {sheets.map(({ id, groupId, name, problems }, sheetIndex) => (
                <div className="sheet-collection" key={sheetIndex}>
                  <Sheet
                    id={id}
                    groupId={groupId}
                    name={name}
                    problems={problems}
                    traineesCount={traineesCount}
                    hovered={hoveredSheetIndex === sheetIndex}
                    hoveredProblemIndex={hoveredProblemIndex}
                    onSheetHover={() => ({})}
                    // index => this.setState({ hoveredSheetIndex: index || sheetIndex })
                    onProblemHover={() => ({})}
                    // index => this.setState({ hoveredProblemIndex: index })
                  />
                </div>
              ))}
            </div>
            <div
              className="trainee-problems-status"
              style={{
                paddingTop: paddingBetweenRows,
                paddingBottom: paddingBetweenRows,
              }}
            >
              {trainees.map(({ handle }, traineeIndex) => {
                return (
                  <div
                    key={traineeIndex}
                    className="trainee-problems-row"
                    style={{
                      paddingTop: paddingBetweenRows,
                      paddingBottom: paddingBetweenRows,
                    }}
                  >
                    {sheets.map(({ id: sheetId, problems }, sheetIndex) => {
                      const placeholderCount = Math.max(0, 26 - problems.length);

                      return (
                        <React.Fragment key={`${sheetId}-${traineeIndex}`}>
                          {problems.map(({ id: problemId }, problemIndex) => {
                            const submission =
                              (submissions[handle] && submissions[handle][`${sheetId}-${problemId}`]) || {};
                            const ignored = !(
                              (hoveredTraineeIndex === -1 && hoveredSheetIndex === -1 && hoveredProblemIndex === -1) ||
                              hoveredTraineeIndex === traineeIndex ||
                              (hoveredProblemIndex === -1 && hoveredSheetIndex === sheetIndex) ||
                              (hoveredProblemIndex === problemIndex && hoveredSheetIndex === sheetIndex)
                            );

                            return (
                              <div
                                key={`${sheetId}-${problemId}`}
                                // onMouseEnter={() =>
                                //   this.setState({
                                //     hoveredTraineeIndex: TraineeIndex,
                                //     hoveredSheetIndex: sheetIndex,
                                //     hoveredProblemIndex: problemIndex
                                //   })
                                // }
                                // onMouseLeave={() =>
                                //   this.setState({
                                //     hoveredTraineeIndex: -1,
                                //     hoveredSheetIndex: -1,
                                //     hoveredProblemIndex: -1
                                //   })
                                // }
                              >
                                <BoardCell
                                  submission={submission}
                                  ignored={ignored}
                                  firstColumn={sheetIndex === 0 && problemIndex === 0}
                                  firstRow={traineeIndex === 0}
                                />
                              </div>
                            );
                          })}

                          {[...Array(placeholderCount)].map((_, index) => (
                            <div key={`${sheetId}-placeholder-${index}`}>
                              <BoardCell submission={{}} ignored={true} firstColumn={false} firstRow={false} />
                            </div>
                          ))}
                        </React.Fragment>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

export default Board;
