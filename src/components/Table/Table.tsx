import { ReactNode, useState } from "react";
import StyledTable from "./StyledTable";

interface TableProps {
  header: string[];
  children: ReactNode;
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}
const Table = ({
  header,
  children,
  selectedStatus,
  setSelectedStatus,
}: TableProps) => {
  const status = ["confirmed", "recovered", "treatment", "death"];
  const [statusIndex, setStatusIndex] = useState(0);

  const changeSelectedStatus = () => {
    const nextIndex = (statusIndex + 1) % status.length;
    const nextStatus = status[nextIndex];
    setSelectedStatus(nextStatus);
    setStatusIndex(nextIndex);
  };
  return (
    <StyledTable>
      <thead>
        <tr>
          {header.map((item, id) => (
            <th key={id}>{item}</th>
          ))}
          <th onClick={() => changeSelectedStatus()}>{selectedStatus}</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
      <tfoot>
        <tr>
          {header.map((item, id) => (
            <th key={id}>{item}</th>
          ))}
          <th onClick={() => changeSelectedStatus()}>{selectedStatus}</th>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;
