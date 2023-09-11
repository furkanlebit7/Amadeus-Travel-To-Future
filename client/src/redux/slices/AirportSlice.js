import { createSlice } from "@reduxjs/toolkit";
import { fetchAirports } from "../services/AirportService";

export const AirportSlice = createSlice({
  name: "airport ",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    //Fetch Airports
    [fetchAirports.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAirports.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    },
    [fetchAirports.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default AirportSlice.reducer;

export const getAirports = (state) => state.airport;
