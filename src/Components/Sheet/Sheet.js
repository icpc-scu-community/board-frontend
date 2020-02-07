import React from 'react';
import PropTypes from 'prop-types';
import { sheetNameHeight, blockSize, sheetProblemIdHeight } from '../common';
import styles from './styles';

class Sheet extends React.Component {
  render() {
    const { id, name, problems } = this.props;

    return (
      <>
        <div className="sheet">
          <a
            href={`https://codeforces.com/group/MWSDmqGsZm/contest/${id}`}
            rel="noopener noreferrer"
            target="_blank"
            className="title"
            style={{ height: sheetNameHeight }}
          >
            {name}
          </a>
          <div className="problems">
            {problems.map((problem, index) => (
              <a
                key={index}
                href={`https://codeforces.com/group/MWSDmqGsZm/contest/${id}/problem/${problem.id}`}
                rel="noopener noreferrer"
                target="_blank"
                className="problem"
                style={{ width: blockSize, height: sheetProblemIdHeight }}
              >
                <div className="id">{problem.id}</div>
                <div className="status">(999/999)</div>
                <div
                  className="details"
                  style={{ top: sheetProblemIdHeight - 5 }}
                >
                  {problem.name}
                </div>
              </a>
            ))}
          </div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

Sheet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  problems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Sheet;
