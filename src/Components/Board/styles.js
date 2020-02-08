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
    z-index: 1;
  }

  /* sheets */
  .board .sheets-section .sheets {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
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
