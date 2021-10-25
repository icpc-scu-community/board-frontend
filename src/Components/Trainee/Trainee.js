import React from 'react';
import PropTypes from 'prop-types';
import { getShortName, getUniqueHashFromName } from '../../utils';
import styles from './styles';

class Trainee extends React.Component {
  render() {
    const { name, handle, states, problemsCount } = this.props;
    const shortName = getShortName(name);
    const colorPercent = getUniqueHashFromName(name);
    const { solved, tried, submissions } = states;
    const missed = problemsCount - (solved + tried);

    return (
      <>
        <div className="trainee">
          <div className="photo" style={{ backgroundColor: `hsl(${colorPercent * 360}, 100%, 75%)` }}>
            {shortName}
          </div>
          <div className="info">
            <div className="name">{name.trim()}</div>
            <div className="handle">
              <a href={`https://codeforces.com/profile/${handle}`} rel="noopener noreferrer" target="_blank">
                @{handle.trim()}
              </a>
            </div>
            <div className="states">
              <div className="state solved">
                {solved}
                <div className="note">Solved</div>
              </div>
              <div className="state tried">
                {tried}
                <div className="note">Tried but not solved yet</div>
              </div>
              <div className="state missed">
                {missed}
                <div className="note">Not solved nor tried yet</div>
              </div>
              <div className="state submissions">
                {submissions}
                <div className="note">Total submissions</div>
              </div>
            </div>
          </div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

Trainee.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  states: PropTypes.shape({
    solved: PropTypes.number.isRequired,
    tried: PropTypes.number.isRequired,
    submissions: PropTypes.number.isRequired,
  }).isRequired,
  problemsCount: PropTypes.number.isRequired,
};

export default Trainee;
