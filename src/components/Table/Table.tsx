import { ReactNode } from "react";

interface TableProps {
  header: string[];
  children: ReactNode;
}
const Table = ({ header, children }: TableProps) => {
  return (
    <table>
      <tr>
        {header.map((item) => (
          <th>{item}</th>
        ))}
      </tr>
      {children}
    </table>
  );
};

export default Table;
