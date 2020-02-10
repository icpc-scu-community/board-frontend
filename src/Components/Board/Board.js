import React from 'react';
import PropTypes from 'prop-types';
import { paddingBetweenRows } from '../common';
import TraineeList from '../TraineeList';
import BoardCell from '../BoardCell';
import Sheet from '../Sheet';
import styles from './styles';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredTraineeIndex: -1,
      hoveredProblemIndex: -1,
      hoveredSheetIndex: -1
    };
  }

  render() {
    const { sheets, trainees, submissions } = this.props;
    const {
      hoveredTraineeIndex,
      hoveredProblemIndex,
      hoveredSheetIndex
    } = this.state;

    const traineesCount = trainees.length;
    const problemsCount = sheets.reduce(
      (acc, { problems }) => acc + problems.length,
      0
    );

    return (
      <>
        <div className="board">
          <div className="trainees-section">
            <TraineeList
              trainees={trainees}
              problemsCount={problemsCount}
              hoveredTraineeIndex={hoveredTraineeIndex}
              onTraineeHover={() => ({})}
              // index => this.setState({ hoveredTraineeIndex: index })
            />
          </div>
          <div className="sheets-section">
            <div className="sheets">
              {sheets.map(({ id, name, problems }, sheetIndex) => (
                <div className="sheet-collection" key={sheetIndex}>
                  <Sheet
                    id={id}
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
                paddingBottom: paddingBetweenRows
              }}
            >
              {trainees.map(({ handle }, traineeIndex) => {
                let remainingProblems = problemsCount + 1;
                let problemsI = 0;

                let remainingTrainees = traineesCount - traineeIndex + 1;
                let traineesI = traineeIndex;

                remainingTrainees--;
                traineesI++;

                return (
                  <div
                    key={traineeIndex}
                    className="trainee-problems-row"
                    style={{
                      paddingTop: paddingBetweenRows,
                      paddingBottom: paddingBetweenRows
                    }}
                  >
                    {sheets.map(({ id: sheetId, problems }, sheetIndex) =>
                      problems.map(({ id: problemId }, problemIndex) => {
                        remainingProblems--;
                        problemsI++;

                        const submission =
                          (submissions[handle] &&
                            submissions[handle][`${sheetId}-${problemId}`]) ||
                          {};
                        const ignored = !(
                          (hoveredTraineeIndex === -1 &&
                            hoveredSheetIndex === -1 &&
                            hoveredProblemIndex === -1) ||
                          hoveredTraineeIndex === traineeIndex ||
                          (hoveredProblemIndex === -1 &&
                            hoveredSheetIndex === sheetIndex) ||
                          (hoveredProblemIndex === problemIndex &&
                            hoveredSheetIndex === sheetIndex)
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
                              sheetId={sheetId}
                              submission={submission}
                              ignored={ignored}
                              right={remainingProblems <= 5 && problemsI > 5}
                              bottom={remainingTrainees <= 2 && traineesI > 2}
                            />
                          </div>
                        );
                      })
                    )}
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

Board.propTypes = {
  sheets: PropTypes.array.isRequired,
  trainees: PropTypes.array.isRequired,
  submissions: PropTypes.object.isRequired
};

export default Board;
