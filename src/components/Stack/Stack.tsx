import { ReactNode } from "react";
import StackStyled from "./StackStyled";

interface StackProps {
  children: ReactNode;
}

const Stack = ({ children }: StackProps) => {
  return <StackStyled>{children}</StackStyled>;
};

export default Stack;
