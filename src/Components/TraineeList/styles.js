import css from 'styled-jsx/css';
import { lightgrey, greyborders } from '../common';

export const progressWidth = 75;
const listItemPadding = 10;

export default css`
  .trainee-list {
    display: flex;
    flex-direction: column;
    background: white;
    box-sizing: border-box;
    border-right: 1px solid ${greyborders};
  }

  .trainee-list .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    text-transform: uppercase;
    font-size: 14px;
    cursor: default;
    background: white;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0 ${listItemPadding}px;
    background: ${lightgrey};
    padding-bottom: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid ${greyborders};
    color: ${greyborders};
  }

  .list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${listItemPadding}px;
    transition: all 100ms;
  }

  .list-item.even {
    background-color: #f3f3f3;
  }

  /* .list-item:hover {
    background-color: #e0e0e0;
  } */

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
    height: 70%;
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
