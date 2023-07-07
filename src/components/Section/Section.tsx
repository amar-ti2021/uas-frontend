import { ReactNode } from "react";
import Subtitle from "../../lib/ui/Subtitle/Subtitle";
import Title from "../../lib/ui/Title";
import SectionStyled from "./SectionStyled";

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </SectionStyled>
  );
};

export default Section;
