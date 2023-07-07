import { styled } from "styled-components";

const StyledHero = styled.section`
  display: flex;
  min-height: 60vh;
  align-items: center;
  div {
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      button {
        border: none;
        border-radius: 3px;
        background-color: #6c63ff;
        color: var(--white);
        padding: 0.8rem;
        width: fit-content;
      }
    }
  }
  img {
    display: none;
    width: 40%;
  }
  @media (min-width: 768px) {
    height: 80vh;
    img {
      display: block;
    }
  }
`;

export default StyledHero;
