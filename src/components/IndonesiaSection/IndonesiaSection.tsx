import Subtitle from "../../lib/ui/Subtitle/Subtitle";
import Title from "../../lib/ui/Title/Title";
import Card from "../Card/Card";
import Section from "../Section/Section";
import Stack from "../Stack/Stack";

interface IndonesiaSectionProps {
  indonesia: [
    {
      status: string;
      total: number;
    }
  ];
}
const IndonesiaSection = ({ indonesia }: IndonesiaSectionProps) => {
  return (
    <Section
      title="Indonesia Situation"
      subtitle="Data Covid Berdasarkan Status Indonesia"
    >
      <Stack>
        {indonesia.map((item) => (
          <Card>
            <Title>{item.status}</Title>
            <Subtitle>{item.total}</Subtitle>
          </Card>
        ))}
      </Stack>
    </Section>
  );
};

export default IndonesiaSection;
