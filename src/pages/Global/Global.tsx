import { useEffect, useState } from "react";
import GlobalSection from "../../components/GlobalSection";
import ENDPOINTS from "../../lib/endpoints/endpoints";
import axios from "axios";
import RegionSection from "../../components/RegionSection";

interface GlobalData {
  last_update: string;
  global: [
    {
      status: string;
      total: number;
    }
  ];
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

const Global = () => {
  const [globalData, setGlobalData] = useState<GlobalData>();

  const getGlobalData = async () => {
    const response = await axios(ENDPOINTS.GLOBAL);
    setGlobalData(response.data);
  };

  useEffect(() => {
    getGlobalData();
  }, []);
  return (
    <>
      {globalData && (
        <>
          <GlobalSection global={globalData.global} />
          <RegionSection regions={globalData.regions} />
        </>
      )}
    </>
  );
};

export default Global;
