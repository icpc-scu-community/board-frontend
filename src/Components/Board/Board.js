import React from 'react';
import PropTypes from 'prop-types';
import { TraineeList } from '../TraineeList';
import Sheet from '../Sheet';
import './styles.css';

class Board extends React.Component {
  render() {
    const { sheets, trainees } = this.props;

    return (
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
          <div>Hi</div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  sheets: PropTypes.array.isRequired,
  trainees: PropTypes.array.isRequired
};

export default Board;
