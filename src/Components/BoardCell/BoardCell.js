import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { blockSize } from '../common';
import styles from './styles';

class BoardCell extends React.Component {
  render() {
    const { sheetId, submission, ignored, right, bottom } = this.props;
    const { verdict, triesBeforeAC, list } = submission;

    return (
      <>
        <div
          className={cn('board-cell', {
            ac: verdict === 'AC',
            'not-ac': verdict !== 'AC',
            'not-solved': verdict === undefined,
            ignored
          })}
          style={{ width: blockSize, height: blockSize }}
        >
          {verdict !== undefined ? (
            <>
              <div>{verdict}</div>
              <div>{triesBeforeAC ? `+${triesBeforeAC}` : ''}</div>
              <div
                className="list"
                style={{
                  [right ? 'right' : 'left']: blockSize / 2 - 15,
                  [bottom ? 'bottom' : 'top']: blockSize / 2 + 15
                }}
              >
                {list.map(
                  (
                    { id: submissionId, message, verdict: submissionVerdict },
                    submissionIndex
                  ) => (
                    <a
                      key={submissionIndex}
                      className="list-item"
                      href={`https://codeforces.com/group/MWSDmqGsZm/contest/${sheetId}/submission/${submissionId}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div
                        className={cn('state', {
                          ac: submissionVerdict === 'AC',
                          'not-ac': submissionVerdict !== 'AC'
                        })}
                      ></div>
                      <div>{submissionId}</div>
                      <div>{message}</div>
                    </a>
                  )
                )}
              </div>
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
  sheetId: PropTypes.string.isRequired,
  submission: PropTypes.object.isRequired,
  ignored: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  bottom: PropTypes.bool.isRequired
};

export default BoardCell;
