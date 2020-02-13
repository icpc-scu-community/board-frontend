import css from "styled-jsx/css";
import { footerHeight } from "../Footer";
const traineesListWidth = 330;

export default css`
  .board {
    display: flex;
    flex-direction: row;
    overflow: auto;
    position: fixed;
    width: 100%;
    height: calc(100% - ${footerHeight}px);
  }

  /* trainees */
  .board .trainees-section {
    position: sticky;
    left: 0;
    z-index: 3;
    width: ${traineesListWidth}px;
  }

  /* sheets */
  .sheets-section {
    position: absolute;
    left: ${traineesListWidth}px;
  }

  .sheets-section .sheets {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    z-index: 2;
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
`;
