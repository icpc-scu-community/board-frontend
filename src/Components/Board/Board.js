import React from 'react';
import PropTypes from 'prop-types';
import { blockSize } from '../common';
import { TraineeList } from '../TraineeList';
import Sheet from '../Sheet';
import styles from './styles';

class Board extends React.Component {
  render() {
    const { sheets, trainees } = this.props;

    return (
      <>
        <div className="board">
          <div className="trainees-section">
            <TraineeList trainees={trainees} />
          </div>
          <div className="sheets-section">
            <div className="sheets">
              {sheets.map(({ id, name, problems }, index) => (
                <div className="sheet-collection" key={index}>
                  <Sheet id={id} name={name} problems={problems} />
                </div>
              ))}
            </div>
            <div className="trainee-problems-status">
              {trainees.map((_, index) => (
                <div key={index} className="trainee-problems-row">
                  {sheets.map(({ problems }) =>
                    problems.map(({ id }) => (
                      <div
                        key={id}
                        className="trainee-problems-cell ac"
                        style={{ width: blockSize, height: blockSize }}
                      >
                        AC
                      </div>
                    ))
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
  trainees: PropTypes.array.isRequired
};

export default Board;
