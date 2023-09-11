import { configureStore } from "@reduxjs/toolkit";
import AirportSlice from "./slices/AirportSlice";
import FlightSlice from "./slices/FlightSlice";

export const store = configureStore({
  reducer: {
    airport: AirportSlice,
    flight: FlightSlice,
  },
});
