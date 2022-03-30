import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { sheetNameHeight, blockSize, sheetProblemIdHeight } from '../common';
import styles from './styles';

class Sheet extends React.Component {
  render() {
    const { id, groupId, name, problems, traineesCount, hovered, hoveredProblemIndex, onSheetHover, onProblemHover } =
      this.props;
    const placeholderCount = Math.max(0, 26 - problems.length);

    return (
      <>
        <div className="sheet">
          <a
            href={`https://codeforces.com/group/${groupId}/contest/${id}`}
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
                href={`https://codeforces.com/group/${groupId}/contest/${id}/problem/${problem.id}`}
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
            {[...Array(placeholderCount)].map((_, index) => (
              <div
                key={`placeholder_header_${index}`}
                className="problem placeholder"
                style={{ width: blockSize, height: sheetProblemIdHeight }}
              >
                <div className="name">
                  <div className="id">?</div>
                </div>
                <div className="progress" style={{ height: '0%' }}></div>
              </div>
            ))}
          </div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

Sheet.propTypes = {
  id: PropTypes.number.isRequired,
  groupId: PropTypes.string.isRequired,
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
