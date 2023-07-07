import { configureStore } from "@reduxjs/toolkit";
import provincesReducer from "../slices/provincesSlice";

const store = configureStore({
  reducer: {
    provinces: provincesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
