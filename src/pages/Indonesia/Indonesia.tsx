import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../lib/endpoints/endpoints";
import IndonesiaSection from "../../components/IndonesiaSection/IndonesiaSection";
import ProvinceSection from "../../components/ProvinceSection/ProvinceSection";

interface IndonesiaData {
  last_update: string;
  indonesia: [
    {
      status: string;
      total: number;
    }
  ];
  regions: [
    {
      type: string;
      name: string;
      numbers: {
        confirmed: number;
        recovered: number;
        treatment: number;
        death: number;
      };
    }
  ];
}

const Indonesia = () => {
  const [indonesiaData, setIndonesiaData] = useState<IndonesiaData>();
  const getIndonesiaData = async () => {
    const response = await axios(ENDPOINTS.INDONESIA);
    setIndonesiaData(response.data);
  };
  useEffect(() => {
    getIndonesiaData();
  }, []);
  return (
    <>
      {indonesiaData && (
        <>
          <IndonesiaSection indonesia={indonesiaData.indonesia} />
          <ProvinceSection regions={indonesiaData.regions} />
        </>
      )}
    </>
  );
};

export default Indonesia;
