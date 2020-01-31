import React from 'react';
import PropTypes from 'prop-types';
import { getShortName, getUniqueHashFromName } from '../../utils';
import './styles.css';

class Trainee extends React.Component {
  render() {
    const { name, handle, states } = this.props;
    const shortName = getShortName(name);
    const colorPercent = getUniqueHashFromName(name);
    const { solved, tried, missed, submissions } = states;

    return (
      <div className="trainee">
        <div
          className="photo"
          style={{ backgroundColor: `hsl(${colorPercent * 360}, 100%, 75%)` }}
        >
          {shortName}
        </div>
        <div className="info">
          <div className="name">{name.trim()}</div>
          <div className="handle">
            <a
              href={`https://codeforces.com/profile/${handle}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              @{handle.trim()}
            </a>
          </div>
          <div className="states">
            <div className="solved">{solved}</div>
            <div className="tried">{tried}</div>
            <div className="missed">{missed}</div>
            <div className="submissions">{submissions}</div>
          </div>
        </div>
      </div>
    );
  }
}

Trainee.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  states: PropTypes.shape({
    solved: PropTypes.number.isRequired,
    tried: PropTypes.number.isRequired,
    missed: PropTypes.number.isRequired,
    submissions: PropTypes.number.isRequired
  }).isRequired
};

export default Trainee;
