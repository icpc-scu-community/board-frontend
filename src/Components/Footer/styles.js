import css from 'styled-jsx/css';

export const footerHeight = 45;

export default css`
  .footer {
    width: 100%;
    height: ${footerHeight}px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 5px 15px;
    box-sizing: border-box;
    background: #eee;
  }

  .footer .uni {
    height: 100%;
  }

  .footer .uni a {
    display: flex;
    flex-direction: row;
    height: 100%;
    color: grey;
    text-decoration: none;
    transition: all 100ms;
  }

  .footer .uni a:hover {
    color: #555;
  }

  .footer .uni a:active {
    color: #333;
  }

  .footer .uni p {
    margin: 0;
  }

  .footer .uni .logo {
    margin-right: 5px;
  }

  .footer .uni .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .footer .uni img {
    max-height: 100%;
    max-width: 100%;
    border: 1px solid #ccc;
    padding: 2px;
    box-sizing: border-box;
    border-radius: 3px;
  }
`;
