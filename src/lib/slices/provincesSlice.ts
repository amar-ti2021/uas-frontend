import { createSlice } from "@reduxjs/toolkit";
import data from "../constants/provinces";
import useTransformProvinceData from "../hooks/useTransformProvinceData";

const provincesSlice = createSlice({
  name: "Province Slice",
  initialState: {
    province: useTransformProvinceData(data.provinces),
  },
  reducers: {
    updateProvince(state, action) {
      state.province = action.payload;
    },
  },
});

const { updateProvince } = provincesSlice.actions;
const provincesReducer = provincesSlice.reducer;

export default provincesReducer;
export { updateProvince };
