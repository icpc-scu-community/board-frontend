import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { sheetNameHeight, blockSize, sheetProblemIdHeight } from '../common';
import styles from './styles';

class Sheet extends React.Component {
  render() {
    const { id, name, problems, traineesCount, hovered, hoveredProblemIndex, onSheetHover, onProblemHover } =
      this.props;

    return (
      <>
        <div className="sheet">
          <a
            href={`https://codeforces.com/group/MWSDmqGsZm/contest/${id}`}
            rel="noopener noreferrer"
            target="_blank"
            className={cn('title', { hovered })}
            style={{ height: sheetNameHeight }}
            onMouseEnter={() => onSheetHover()}
            onMouseLeave={() => onSheetHover(-1)}
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
                className={cn('problem', {
                  hovered: hovered && hoveredProblemIndex === index,
                })}
                style={{ width: blockSize, height: sheetProblemIdHeight }}
                onMouseEnter={() => {
                  onProblemHover(index);
                  onSheetHover();
                }}
                onMouseLeave={() => {
                  onProblemHover(-1);
                  onSheetHover(-1);
                }}
              >
                <div className="name">
                  <div className="id">{problem.id}</div>
                  <div className="status">{`(${problem.solved}/${traineesCount})`}</div>
                </div>
                <div
                  className="progress"
                  style={{
                    height: `${Math.round((problem.solved / traineesCount) * 100)}%`,
                  }}
                ></div>
                <div className="note" style={{ top: sheetProblemIdHeight - 5 }}>
                  {`${problem.id}. ${problem.name}`}
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
      name: PropTypes.string.isRequired,
      solved: PropTypes.number.isRequired,
    }),
  ).isRequired,
  traineesCount: PropTypes.number.isRequired,
  hovered: PropTypes.bool.isRequired,
  hoveredProblemIndex: PropTypes.number.isRequired,
  onSheetHover: PropTypes.func.isRequired,
  onProblemHover: PropTypes.func.isRequired,
};

export default Sheet;
