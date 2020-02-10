import css from 'styled-jsx/css';

export default css`
  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    text-transform: uppercase;
    user-select: none;
  }

  .state {
    overflow: hidden;
    width: 190px;
    height: 145px;
    margin-bottom: 20px;
  }

  .state img {
    margin-left: -587px;
    margin-top: -220px;
  }
`;
