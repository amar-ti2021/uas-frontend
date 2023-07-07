import { styled } from "styled-components";

const StyledHero = styled.section`
  display: flex;
  div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      button {
        border: none;
        border-radius: 3px;
        background-color: blue;
        padding: 0.8rem;
        width: fit-content;
      }
    }
  }
  img {
    width: 40%;
  }
`;

export default StyledHero;
