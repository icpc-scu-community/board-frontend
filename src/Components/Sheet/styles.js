import css from 'styled-jsx/css';

export default css`
  .sheet .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-decoration: none;
    color: #666;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    background-color: #eee;
    box-sizing: border-box;
    transition: all 100ms;
  }

  .sheet .title:hover {
    background-color: #e0e0e0;
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
    background-color: #eee;
    color: #666;
    border: 1px solid #ccc;
    border-left: none;
    border-top: none;
    box-sizing: border-box;
    transition: all 100ms;
  }

  .sheet .problems .problem:hover {
    background-color: #e0e0e0;
  }

  .sheet .problems .problem .status {
    font-size: 10px;
    color: gray;
  }

  .sheet .problems .problem .note {
    position: absolute;
    z-index: 10;
    white-space: nowrap;
    font-size: 10px;
    color: grey;
    background: lightyellow;
    padding: 3px;
    opacity: 0;
    transition: all 300ms;
    visibility: hidden;
  }

  .sheet .problems .problem:hover .note {
    opacity: 1;
    visibility: visible;
  }
`;
