import Title from "../../lib/ui/Title";
import Card from "../Card";
import Section from "../Section";
import Stack from "../Stack";

interface RegionSectionProps {
  regions: [
    {
      name: string;
      type: string;
      numbers: {
        confirmed: number;
        death: number;
        recovered: number;
      };
    }
  ];
}

const RegionSection = ({ regions }: RegionSectionProps) => {
  return (
    <Section title="Situation By Regions" subtitle="Situasi di penjuru dunia">
      <Stack>
        {regions.map((region) => (
          <Card>
            <Title>{region.name}</Title>
            {Object.entries(region.numbers).map(([key, value]) => (
              <div key={key}>
                {key}: {value}
              </div>
            ))}
          </Card>
        ))}
      </Stack>
    </Section>
  );
};

export default RegionSection;
