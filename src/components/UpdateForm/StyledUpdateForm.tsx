import { styled } from "styled-components";

const StyledUpdateForm = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  img {
    display: none;
  }
  form {
    margin: auto;
    width: 90%;
    border: 1px solid white;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
    }
    button {
      border: none;
      border-radius: 3px;
      background-color: #6c63ff;
      color: var(--white);
      padding: 0.4rem;
    }
    > * {
      margin: 0.5rem;
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    img {
      display: block;
      width: 40%;
    }
    form {
      width: 50%;
    }
  }
`;
export default StyledUpdateForm;
