import React from 'react';
import PropTypes from 'prop-types';
import {
  sheetNameHeight,
  sheetProblemIdHeight,
  blockSize,
  paddingBetweenRows
} from '../common';
import Trainee from '../Trainee';
import styles, { progressWidth } from './styles';

class TraineeList extends React.Component {
  render() {
    const { trainees } = this.props;

    return (
      <>
        <div className="trainee-list">
          <div
            className="header"
            style={{ height: sheetNameHeight + sheetProblemIdHeight }}
          >
            <div>Trainee</div>
            <div style={{ width: progressWidth }}>Progress</div>
          </div>
          <div
            className="trainees"
            style={{
              paddingTop: paddingBetweenRows,
              paddingBottom: paddingBetweenRows
            }}
          >
            {trainees.map(({ name, handle, states }) => (
              <div
                className="list-item"
                key={handle}
                style={{
                  height: blockSize,
                  paddingTop: paddingBetweenRows,
                  paddingBottom: paddingBetweenRows
                }}
              >
                <div className="trainee">
                  <Trainee name={name} handle={handle} states={states} />
                </div>
                <div className="progress">
                  <div className="percentage">33%</div>
                  <div className="counts">(46/999)</div>
                  <div className="bar" style={{ width: '60%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

TraineeList.propTypes = {
  trainees: PropTypes.array.isRequired
};

export default TraineeList;
