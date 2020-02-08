import css from 'styled-jsx/css';

export default css`
  .trainee {
    display: flex;
    flex-direction: row;
  }

  .photo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 5px;
    user-select: none;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info .name {
    font-size: 14px;
    white-space: nowrap;
  }

  .info .handle {
    font-size: 10px;
    white-space: nowrap;
  }

  .info .handle > a {
    color: grey;
    text-decoration: none;
  }

  .info .handle > a:hover {
    color: darkgray;
  }

  .info .handle > a:active {
    color: black;
  }

  .info .states {
    display: flex;
    margin-top: 2px;
  }

  .info .states > * {
    display: flex;
    align-items: center;
    font-size: 10px;
    color: grey;
    min-width: 20px;
  }

  .info .states > *:not(:last-of-type) {
    margin-right: 10px;
  }

  .info .states > *::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .info .states > .solved::before {
    background-color: lightgreen;
  }

  .info .states > .tried::before {
    background-color: lightcoral;
  }

  .info .states > .missed::before {
    background-color: grey;
  }

  .info .states > .submissions::before {
    background-color: yellow;
  }
`;
