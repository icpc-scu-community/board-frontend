import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { blockSize, paddingBetweenRows } from '../common';
import { TraineeList } from '../TraineeList';
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
              onTraineeHover={index =>
                this.setState({ hoveredTraineeIndex: index })
              }
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
                    hovered={hoveredSheetIndex === sheetIndex}
                    hoveredProblemIndex={hoveredProblemIndex}
                    onSheetHover={index =>
                      this.setState({ hoveredSheetIndex: index || sheetIndex })
                    }
                    onProblemHover={index =>
                      this.setState({ hoveredProblemIndex: index })
                    }
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
              {trainees.map(({ handle }, TraineeIndex) => (
                <div
                  key={TraineeIndex}
                  className="trainee-problems-row"
                  style={{
                    paddingTop: paddingBetweenRows,
                    paddingBottom: paddingBetweenRows
                  }}
                >
                  {sheets.map(({ id: sheetId, problems }, sheetIndex) =>
                    problems.map(({ id: problemId }, problemIndex) => {
                      const submission =
                        (submissions[handle] &&
                          submissions[handle][`${sheetId}-${problemId}`]) ||
                        {};

                      return (
                        <div
                          key={`${sheetId}-${problemId}`}
                          className={cn('trainee-problems-cell', {
                            ac: submission.verdict === 'AC',
                            'not-ac': submission.verdict !== 'AC',
                            'not-solved': submission.verdict === undefined,
                            ignore: !(
                              (hoveredTraineeIndex === -1 &&
                                hoveredProblemIndex === -1 &&
                                hoveredSheetIndex === -1) ||
                              hoveredTraineeIndex === TraineeIndex ||
                              (hoveredSheetIndex === sheetIndex &&
                                hoveredProblemIndex === -1) ||
                              (hoveredProblemIndex === problemIndex &&
                                hoveredSheetIndex === sheetIndex)
                            )
                          })}
                          style={{ width: blockSize, height: blockSize }}
                          onMouseEnter={() =>
                            this.setState({
                              hoveredTraineeIndex: TraineeIndex,
                              hoveredSheetIndex: sheetIndex,
                              hoveredProblemIndex: problemIndex
                            })
                          }
                          onMouseLeave={() =>
                            this.setState({
                              hoveredTraineeIndex: -1,
                              hoveredSheetIndex: -1,
                              hoveredProblemIndex: -1
                            })
                          }
                        >
                          {submission.verdict ? (
                            <>
                              <div>{submission.verdict}</div>
                              <div>+10</div>
                              {/* <div className="list"></div> */}
                            </>
                          ) : (
                            <div>?</div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              ))}
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
