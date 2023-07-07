const useTransformProvinceData = (
  provinces: {
    kota: string;
    kasus: number;
    sembuh: number;
    meninggal: number;
    dirawat: number;
  }[]
) => {
  return provinces.map((province) => {
    return {
      type: "region",
      name: province.kota,
      numbers: {
        confirmed: province.kasus,
        recovered: province.sembuh,
        treatment: province.dirawat,
        death: province.meninggal,
      },
    };
  });
};

export default useTransformProvinceData;
