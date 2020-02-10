import React from 'react';
import styles from './styles';
import states from '../states.gif';

class Invalid extends React.Component {
  render() {
    return (
      <>
        <div className="invalid">
          <div className="state">
            <img src={states} alt="invalid data" />
          </div>
          <div>Invalid data (URL)</div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

export default Invalid;
