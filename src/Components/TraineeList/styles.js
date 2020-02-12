import css from 'styled-jsx/css';

export const progressWidth = 75;
const listItemPadding = 10;

export default css`
  .trainee-list {
    display: flex;
    flex-direction: column;
    background: white;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
  }

  .trainee-list .header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #eee;
    cursor: default;
    padding: ${listItemPadding}px;
    padding-bottom: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
  }

  .header .title {
    font-size: 16px;
  }

  .header .last-update {
    font-size: 12px;
    margin-top: -5px;
    color: #666;
  }

  .header .list-desc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 12px;
    text-transform: uppercase;
    color: #939393;
  }

  .list-item .list-item-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all 100ms;
    padding: 0 ${listItemPadding}px;
    height: 100%;
  }

  .list-item.even .list-item-content {
    background-color: #f3f3f3;
  }

  /* .list-item.hovered .list-item-content {
    background-color: #e0e0e0;
  } */

  .list-item:hover .list-item-content {
    background-color: #e0e0e0;
  }

  .order {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #999;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-right: 10px;
    box-sizing: border-box;
    user-select: none;
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
    height: 70%;
    z-index: 0;
    background-color: #ddd;
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

  :global(.list-item:last-child .note) {
    top: auto !important;
    bottom: 10px;
  }
`;
