import React from 'react';
import PropTypes from 'prop-types';
import { sheetNameHeight, sheetProblemIdHeight, blockSize } from '../common';
import Trainee from '../Trainee';
import styles from './styles';

class TraineeList extends React.Component {
  render() {
    const { trainees } = this.props;

    return (
      <>
        <div className="trainee-list">
          <table className="trainee-list-table">
            <thead className="header">
              <tr style={{ height: sheetNameHeight + sheetProblemIdHeight }}>
                <td>Trainee</td>
                <td>Progress</td>
              </tr>
            </thead>
            <tbody>
              {trainees.map(({ name, handle, states }) => (
                <tr key={handle} style={{ height: blockSize }}>
                  <td className="trainee-cell">
                    <Trainee name={name} handle={handle} states={states} />
                  </td>
                  <td>
                    <div className="trainee-progress">
                      <div className="percentage">33%</div>
                      <div className="counts">(46/999)</div>
                      <div className="advance" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
