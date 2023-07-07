import { useSelector } from "react-redux";
import Section from "../Section/Section";
import Table from "../Table/Table";
import { RootState } from "../../lib/store/store";

interface ProvinceSectionProps {
  regions?: {
    type: string;
    name: string;
    numbers: {
      confirmed: number;
      recovered: number;
      treatment: number;
      death: number;
    };
  }[];
}

const ProvinceSection = ({
  regions = useSelector((store: RootState) => store.provinces.province),
}: ProvinceSectionProps) => {
  return (
    <Section
      title="Situation by Provinces"
      subtitle="Data Covid Berdasarkan Provinsi"
    >
      <Table
        header={["No", "Provinsi", "Positif", "Sembuh", "Dirawat", "Meniggal"]}
      >
        {regions.map((data, id) => {
          return (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{data.name}</td>
              <td>{data.numbers.confirmed}</td>
              <td>{data.numbers.recovered}</td>
              <td>{data.numbers.treatment}</td>
              <td>{data.numbers.death}</td>
            </tr>
          );
        })}
      </Table>
    </Section>
  );
};

export default ProvinceSection;
