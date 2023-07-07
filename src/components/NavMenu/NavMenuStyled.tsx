import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const NavMenuStyled = styled.div`
  margin: 0;
  align-items: center;
  display: flex;
  .hide {
    display: none;
    animation: ${slideOut} 0.6s ease-in-out;
  }
  .show {
    display: flex;
    animation: ${slideIn} 0.6s ease-in-out;
  }

  ul {
    background-color: var(--dark-blue);
    top: 0;
    left: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    padding: 40%;
    list-style-type: none;

    li {
      padding: 0 0.3rem;
      text-align: center;
      > * {
        color: var(--white);
        text-decoration: none;
      }
    }

    button {
      top: 0;
      right: 0;
      position: fixed;
      display: flex;
      padding: 1rem;
      background: transparent;
      border: none;
    }
  }

  button,
  ul button {
    display: flex;
    padding: 1rem;
    background: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    button,
    ul button {
      display: none;
    }

    ul {
      margin: 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: static;
      height: 100%;
      width: fit-content;
      padding: 0;
      animation: none;
    }
  }
`;

export default NavMenuStyled;
