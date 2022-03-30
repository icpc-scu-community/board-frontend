import React from 'react';
import styles from './styles';
import icpcSCU from './icpc-scu.png';

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="uni">
            <a href="https://www.facebook.com/ICPCSCU/" rel="noopener noreferrer" target="_blank">
              <div className="logo">
                <img src={icpcSCU} alt="SCU ICPC Community" />
              </div>
              <div className="desc">
                <p>Board is made and maintained by</p>
                <p>@Suez Canal University ICPC Community</p>
              </div>
            </a>
          </div>
        </div>
        <style jsx={true}>{styles}</style>
      </>
    );
  }
}

export default Footer;
