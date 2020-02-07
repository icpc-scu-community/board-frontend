import css from 'styled-jsx/css';

export default css`
  .sheet .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    border-bottom: 1px solid #e1e1e1;
    background-color: #e1e1e1;
    color: #535353;
  }

  .sheet .problems {
    display: flex;
    flex-direction: row;
  }

  .sheet .problems .problem {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #e1e1e1;
  }

  .sheet .problems .problem .status {
    font-size: 10px;
    color: gray;
  }

  .sheet .problems .problem .details {
    position: absolute;
    z-index: 10;
    white-space: nowrap;
    font-size: 10px;
    background-color: lightyellow;
    padding: 3px;
    border: 1px solid darkgray;
    opacity: 0;
    transition: all 300ms;
    visibility: hidden;
  }

  .sheet .problems .problem:hover .details {
    opacity: 1;
    visibility: visible;
  }
`;