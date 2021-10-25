import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { blockSize } from '../common';
import styles from './styles';

class BoardCell extends React.Component {
  render() {
    const { submission, ignored, firstColumn, firstRow } = this.props;
    const { isAc, triesBeforeAc } = submission;
    const isSolved = isAc !== undefined;

    return (
      <>
        <div
          className={cn('board-cell', {
            'first-column': firstColumn,
            'first-row': firstRow,
            ac: isAc,
            'not-ac': !isAc,
            'not-solved': !isSolved,
            ignored,
          })}
          style={{ width: blockSize, height: blockSize }}
        >
          {isSolved ? (
            <>
              <div>{isAc ? 'AC' : ''}</div>
              <div className="tries-before-ac">{triesBeforeAc ? `+${triesBeforeAc}` : ''}</div>
            </>
          ) : (
            <div>?</div>
          )}
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

BoardCell.propTypes = {
  sheetId: PropTypes.number.isRequired,
  submission: PropTypes.object.isRequired,
  ignored: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  bottom: PropTypes.bool.isRequired,
  firstColumn: PropTypes.bool,
  firstRow: PropTypes.bool,
};

export default BoardCell;
