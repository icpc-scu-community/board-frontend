import React from 'react';
import styles from './styles';
import icpcAssiut from './icpc-assiut.png';
import icpcSCU from './icpc-scu.png';

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="uni">
            <a
              href="https://www.facebook.com/ICPCSCU/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="logo">
                <img src={icpcSCU} alt="Assiut ICPC Community" />
              </div>
              <div className="desc">
                <p>Board is Made and Maintained by</p>
                <p>@Suez Canal University ICPC Community</p>
              </div>
            </a>
          </div>
          <div className="uni">
            <a
              href="https://www.facebook.com/icpc.assiut/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="logo">
                <img src={icpcAssiut} alt="Assiut ICPC Community" />
              </div>
              <div className="desc">
                <p>Sheets are Written and Tested and Maintained by</p>
                <p>
                  @Assiut University ICPC Community
                  <span
                    role="img"
                    aria-label=""
                    style={{ color: 'red', marginLeft: 5 }}
                  >
                    ❤️
                  </span>
                </p>
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
