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
    width: 42px;
    height: 42px;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 14px;
    user-select: none;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info .name {
    font-size: 14px;
    max-width: 135px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

  .states .state {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 10px;
    color: grey;
    min-width: 20px;
    cursor: default;
  }

  .states .state:not(:last-of-type) {
    margin-right: 10px;
  }

  .states .state::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .states .state.solved::before {
    background-color: lightgreen;
  }

  .states .state.tried::before {
    background-color: lightcoral;
  }

  .states .state.missed::before {
    background-color: grey;
  }

  .states .state.submissions::before {
    background-color: yellow;
  }

  .state .note {
    position: absolute;
    top: 12px;
    white-space: nowrap;
    color: grey;
    background: lightyellow;
    padding: 3px;
    transition: all 200ms;
    opacity: 0;
    visibility: hidden;
  }

  .state:hover .note {
    opacity: 1;
    visibility: visible;
  }
`;
