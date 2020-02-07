import css from 'styled-jsx/css';

export default css`
  .trainee {
    display: flex;
    flex-direction: row;
  }

  .trainee .photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 5px;
    user-select: none;
  }

  .trainee .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .trainee .info .name {
    white-space: nowrap;
  }

  .trainee .info .handle {
    font-size: 12px;
    white-space: nowrap;
  }

  .trainee .info .handle > a {
    color: grey;
    text-decoration: none;
  }

  .trainee .info .handle > a:hover {
    color: darkgray;
  }

  .trainee .info .handle > a:active {
    color: black;
  }

  .trainee .info .states {
    display: flex;
    margin-top: 3px;
  }

  .trainee .info .states > * {
    display: flex;
    align-items: center;
    font-size: 10px;
    color: grey;
    min-width: 20px;
  }

  .trainee .info .states > *:not(:last-of-type) {
    margin-right: 10px;
  }

  .trainee .info .states > *::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .trainee .info .states > .solved::before {
    background-color: lightgreen;
  }

  .trainee .info .states > .tried::before {
    background-color: lightcoral;
  }

  .trainee .info .states > .missed::before {
    background-color: grey;
  }

  .trainee .info .states > .submissions::before {
    background-color: yellow;
  }
`;