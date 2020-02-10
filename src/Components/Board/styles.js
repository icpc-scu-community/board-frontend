import css from 'styled-jsx/css';

export default css`
  .board {
    display: flex;
    flex-direction: row;
    overflow: auto;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  /* trainees */
  .board .trainees-section {
    position: sticky;
    left: 0;
    z-index: 2;
    width: 330px;
  }

  /* sheets */
  .sheets-section {
    position: absolute;
    left: 330px;
  }

  .sheets-section .sheets {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  :global(.sheets .sheet-collection:first-child .problem:first-child .note) {
    left: 0;
  }

  :global(.sheets .sheet-collection:last-child .problem:last-child .note) {
    right: 0;
  }

  .sheets-section .trainee-problems-status {
    display: flex;
    flex-direction: column;
  }

  .trainee-problems-status .trainee-problems-row {
    display: flex;
    flex-direction: row;
  }

  .trainee-problems-status .trainee-problems-row.focus {
    background-color: #e0e0e0;
  }

  .trainee-problems-status .trainee-problems-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    box-sizing: border-box;
  }

  .trainee-problems-status .trainee-problems-cell:first-of-type {
    border-left: 1px solid;
  }

  .trainee-problems-status .trainee-problems-cell.ignore {
    opacity: 0.4;
  }

  .trainee-problems-status .trainee-problems-cell.ac {
    background-color: lightgreen;
    border-color: green;
  }

  .trainee-problems-status .trainee-problems-cell.not-ac {
    background-color: orangered;
    border-color: blue;
  }

  .trainee-problems-status .trainee-problems-cell.not-solved {
    background-color: lightgrey;
    border-color: grey;
  }
`;
