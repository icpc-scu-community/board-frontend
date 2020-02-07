import css from 'styled-jsx/css';

export default css`
  .trainee-list .trainee-list-table {
    border-collapse: collapse;
  }

  .trainee-list .trainee-list-table td {
    padding: 0;
  }

  .trainee-list .trainee-list-table .trainee-cell {
    height: 100%;
    padding-right: 25px;
  }

  .trainee-list .trainee-list-table .trainee-progress {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    height: 100%;

    background-color: lightgray;
    width: 90px;
    z-index: 0;
  }

  .trainee-list .trainee-list-table .trainee-progress .counts {
    font-size: 10px;
    color: grey;
  }

  .trainee-list .trainee-list-table .trainee-progress .advance {
    position: absolute;
    left: 0;
    width: 40px;
    height: 100%;
    background-color: lightgreen;
    z-index: -1;
  }
`;