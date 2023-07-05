import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  position: sticky;
  padding: 0.3rem;
  > * {
    margin: 0;
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    li {
      padding: 0 0.3rem;
      > * {
        color: var(--white);
        text-decoration: none;
      }
    }
  }
`;

export default StyledNavbar;
