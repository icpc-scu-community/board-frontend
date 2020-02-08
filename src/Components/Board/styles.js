import css from 'styled-jsx/css';

export default css`
  .board {
    display: flex;
    flex-direction: row;
    overflow: auto;
  }

  /* trainees */
  .board .trainees-section {
    background-color: white;
    position: sticky;
    left: 0;
    z-index: 1;
    padding: 0 10px;
  }

  /* sheets */
  .board .sheets-section .sheets {
    display: flex;
    flex-direction: row;
  }

  .board .sheets-section .trainee-problems-status {
    display: flex;
    flex-direction: column;
  }

  .board .sheets-section .trainee-problems-status .trainee-problems-row {
    display: flex;
    flex-direction: row;
  }

  .board .sheets-section .trainee-problems-status .trainee-problems-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    box-sizing: border-box;
  }

  .board
    .sheets-section
    .trainee-problems-status
    .trainee-problems-cell:first-of-type {
    border-left: 1px solid;
  }

  .board .sheets-section .trainee-problems-status .trainee-problems-cell.ac {
    background-color: lightgreen;
    border-color: green;
  }
`;
