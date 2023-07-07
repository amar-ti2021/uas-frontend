import Subtitle from "../../lib/ui/Subtitle/Subtitle";
import Title from "../../lib/ui/Title/Title";
import Card from "../Card";
import Section from "../Section";
import Stack from "../Stack";

interface GlobalSectionProps {
  global: [
    {
      status: string;
      total: number;
    }
  ];
}

const GlobalSection = ({ global }: GlobalSectionProps) => {
  return (
    <Section
      title="Global Situation"
      subtitle="Data Covid Berdasarkan Status Global"
    >
      <Stack>
        {global.map((item, id) => (
          <Card key={id}>
            <Title>{item.status}</Title>
            <Subtitle>{item.total}</Subtitle>
          </Card>
        ))}
      </Stack>
    </Section>
  );
};

export default GlobalSection;
