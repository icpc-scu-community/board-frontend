import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
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
    const { trainees, problemsCount, onTraineeHover } = this.props;

    return (
      <>
        <div className="trainee-list">
          <div
            className="header"
            style={{ height: sheetNameHeight + sheetProblemIdHeight }}
          >
            <div className="title">Newcomers Training Board</div>
            <div className="last-update">
              <span role="img" aria-label="">
                🕐
              </span>{' '}
              Last update: 3 days ago
            </div>
            <div className="list-desc">
              <div>Trainee</div>
              <div style={{ width: progressWidth }}>Progress</div>
            </div>
          </div>
          <div
            className="trainees"
            style={{
              paddingTop: paddingBetweenRows,
              paddingBottom: paddingBetweenRows
            }}
          >
            {trainees.map(({ name, handle, states }, index) => (
              <div
                className={cn('list-item', { even: index % 2 })}
                key={handle}
                style={{
                  height: blockSize,
                  paddingTop: paddingBetweenRows,
                  paddingBottom: paddingBetweenRows
                }}
                onMouseEnter={() => onTraineeHover(index)}
                onMouseLeave={() => onTraineeHover(-1)}
              >
                <div className="list-item-content">
                  <div className="trainee">
                    <Trainee
                      name={name}
                      handle={handle}
                      states={states}
                      problemsCount={problemsCount}
                    />
                  </div>
                  <div className="progress">
                    <div className="percentage">{`${Math.round(
                      (states.solved / problemsCount) * 100
                    )}%`}</div>
                    <div className="counts">
                      ({states.solved}/{problemsCount})
                    </div>
                    <div
                      className="bar"
                      style={{
                        width: `${(states.solved / problemsCount) * 100}%`
                      }}
                    />
                  </div>
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
  trainees: PropTypes.array.isRequired,
  problemsCount: PropTypes.number.isRequired,
  onTraineeHover: PropTypes.func.isRequired
};

export default TraineeList;
