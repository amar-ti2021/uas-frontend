import { useSelector } from "react-redux";
import Section from "../Section/Section";
import Table from "../Table/Table";
import { RootState } from "../../lib/store/store";
import { useEffect, useState } from "react";

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
interface Item {
  type: string;
  name: string;
  numbers: {
    [key: string]: number;
  };
}

const ProvinceSection = ({
  regions = useSelector((store: RootState) => store.provinces.province),
}: ProvinceSectionProps) => {
  const [selectedStatus, setSelectedStatus] = useState<string>("confirmed");
  const [selectedStatusData, setSelectedStatusData] = useState<number[]>();
  useEffect(() => {
    getSelectedStatusData();
  }, [selectedStatus]);
  const getSelectedStatusData = () => {
    const statusData = regions.map((item: Item) => {
      return item.numbers[selectedStatus];
    });
    setSelectedStatusData(statusData);
  };

  return (
    <Section
      title="Situation by Provinces"
      subtitle="Data Covid Berdasarkan Provinsi"
    >
      <Table
        header={["No", "Provinsi", "Positif", "Sembuh", "Dirawat", "Meniggal"]}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
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
              <td>{selectedStatusData && selectedStatusData[id]}</td>
            </tr>
          );
        })}
      </Table>
    </Section>
  );
};

export default ProvinceSection;
