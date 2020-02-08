import css from 'styled-jsx/css';

export const progressWidth = 75;

export default css`
  .trainee-list {
    display: flex;
    flex-direction: column;
  }

  .trainee-list .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    text-transform: uppercase;
    font-size: 14px;
    cursor: default;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .trainee {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }

  .progress {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: ${progressWidth}px;
    height: 75%;
    z-index: 0;
    background-color: lightgray;
    border: 1px solid green;
    box-sizing: border-box;
    border-radius: 3px;
    overflow: hidden;
  }

  .progress .counts {
    font-size: 10px;
    color: grey;
  }

  .progress .bar {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: lightgreen;
    z-index: -1;
  }
`;
