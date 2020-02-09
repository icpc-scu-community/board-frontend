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
    this.state = { hoveredTraineeIndex: -1 };
  }

  render() {
    const { sheets, trainees, submissions } = this.props;
    const { hoveredTraineeIndex } = this.state;
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
              onTraineeHover={index =>
                this.setState({ hoveredTraineeIndex: index })
              }
            />
          </div>
          <div className="sheets-section">
            <div className="sheets">
              {sheets.map(({ id, name, problems }, index) => (
                <div className="sheet-collection" key={index}>
                  <Sheet id={id} name={name} problems={problems} />
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
              {trainees.map(({ handle }, index) => (
                <div
                  key={index}
                  className={cn('trainee-problems-row', {
                    ignore:
                      hoveredTraineeIndex !== -1 &&
                      hoveredTraineeIndex !== index
                  })}
                  style={{
                    paddingTop: paddingBetweenRows,
                    paddingBottom: paddingBetweenRows
                  }}
                >
                  {sheets.map(({ id: sheetId, problems }) =>
                    problems.map(({ id: problemId }) => {
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
                            'not-solved': submission.verdict === undefined
                          })}
                          style={{ width: blockSize, height: blockSize }}
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
