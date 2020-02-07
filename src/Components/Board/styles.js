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
  }

  /* sheets */
  .board .sheets-section .sheets {
    display: flex;
    flex-direction: row;
  }

  .board .sheets-section .sheets .sheet-collection {
    border-top: 1px solid #535353;
    border-right: 1px solid #535353;
    border-bottom: 1px solid #535353;
    box-sizing: border-box;
  }

  .board .sheets-section .sheets .sheet-collection:first-of-type {
    border-left: 1px solid #535353;
  }

  .board .sheets-section .trainee-problems-status {
    display: flex;
    flex-direction: column;
  }

  .board .sheets-section .trainee-problems-status .trainee-problems-row {
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }

  .board
    .sheets-section
    .trainee-problems-status
    .trainee-problems-row:first-of-type {
    padding-top: 10px;
  }

  .board
    .sheets-section
    .trainee-problems-status
    .trainee-problems-row:last-of-type {
    padding-bottom: 10px;
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
