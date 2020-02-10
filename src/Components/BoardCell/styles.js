import css from 'styled-jsx/css';

export default css`
  .board-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    box-sizing: border-box;
    font-size: 12px;
    cursor: default;
    position: relative;
  }

  .board-cell.ignored {
    opacity: 0.4;
  }

  .board-cell.ac {
    background-color: lightgreen;
    border-color: darkgreen;
  }

  .board-cell.not-ac {
    background-color: #f1979a;
    border-color: #0f0f0f;
  }

  .board-cell.not-solved {
    background-color: #eee;
    border-color: #ccc;
    color: #666;
    font-size: 16px;
  }

  .list {
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background: lightyellow;
    opacity: 0;
    visibility: hidden;
    transition: all 200ms;
  }

  .board-cell:hover .list {
    opacity: 1;
    visibility: visible;
  }

  .list .list-item {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    color: grey;
    text-decoration: none;
    border: 1px solid grey;
    border-bottom: none;
  }

  .list .list-item:last-child {
    border-bottom: 1px solid grey;
  }

  .list .list-item:hover {
    background-color: #eee;
  }

  .list .list-item:active {
    background-color: #d3d3d3;
  }

  .list .list-item > div {
    padding: 3px;
  }

  .list .list-item .state {
    padding: 0;
    width: 5px;
  }

  .list .list-item .state.ac {
    background-color: lightgreen;
  }

  .list .list-item .state.not-ac {
    background-color: #f1979a;
  }
`;
