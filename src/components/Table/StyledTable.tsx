import { styled } from "styled-components";

const StyledTable = styled.table`
  &,
  th,
  td {
    border-collapse: collapse;
    border: 1px solid var(--white);
  }
  th,
  td {
    padding: 5px;
    text-align: center;
  }
  td:nth-child(2) {
    text-align: left;
  }
  td:nth-child(n + 3):nth-child(-n + 6),
  th:nth-child(n + 3):nth-child(-n + 6) {
    display: none;
  }

  @media (min-width: 768px) {
    td:nth-child(n + 3):nth-child(-n + 6),
    th:nth-child(n + 3):nth-child(-n + 6) {
      display: table-cell;
    }
    td:nth-child(n + 7),
    th:nth-child(n + 7) {
      display: none;
    }
  }
`;

export default StyledTable;
