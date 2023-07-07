import { styled } from "styled-components";

const StyledCard = styled.div`
  border: 1px solid white;
  margin-top: 1rem;
  padding: 1.5rem;
  width: 80%;
  @media (min-width: 768px) {
    width: 30%;
  }
`;
export default StyledCard;
