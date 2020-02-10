import React from 'react';
import styles from './styles';
import states from '../states.gif';

class Loading extends React.Component {
  render() {
    return (
      <>
        <div className="loading">
          <div className="state">
            <img src={states} alt="loading" />
          </div>
          <div>Loading</div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

export default Loading;
