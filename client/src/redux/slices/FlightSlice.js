import { createSlice } from "@reduxjs/toolkit";
import { fetchFlights } from "../services/FlightService";

export const FlightService = createSlice({
  name: "flight ",
  initialState: {
    data: [],
    status: "idle",
    filteredFlights: [],
    filteredReturnList: [],
    isOneWay: true,
  },
  reducers: {
    setFilteredFlights: (state, action) => {
      state.filteredFlights = action.payload;
    },
    setFilteredReturnList: (state, action) => {
      console.log("action.payload", action.payload);
      state.filteredReturnList = action.payload;
    },
    setOneWay: (state, action) => {
      state.isOneWay = action.payload;
    },
    sortFilteredList: (state, action) => {
      if (action.payload === "") {
        state.filteredFlights.sort((a, b) => a.id - b.id);
        state.filteredReturnList.sort((a, b) => a.id - b.id);
      } else if (action.payload === "departureTime") {
        state.filteredFlights.sort((a, b) => {
          return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
          );
        });
        state.filteredReturnList.sort((a, b) => {
          return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
          );
        });
      } else if (action.payload === "arrivalTime") {
        state.filteredFlights.sort((a, b) => {
          return (
            new Date(a.arrivalDate).getTime() -
            new Date(b.arrivalDate).getTime()
          );
        });
        state.filteredReturnList.sort((a, b) => {
          return (
            new Date(a.arrivalDate).getTime() -
            new Date(b.arrivalDate).getTime()
          );
        });
      } else if (action.payload === "price") {
        state.filteredFlights.sort((a, b) => a.price - b.price);
        state.filteredReturnList.sort((a, b) => a.price - b.price);
      } else if (action.payload === "flightTime") {
        state.filteredFlights.sort((a, b) => a.flightTime - b.flightTime);
        state.filteredReturnList.sort((a, b) => a.flightTime - b.flightTime);
      }
    },
  },
  extraReducers: {
    //Fetch Flights
    [fetchFlights.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFlights.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.filteredFlights = action.payload;
      state.status = "succeeded";
    },
    [fetchFlights.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default FlightService.reducer;

export const {
  setFilteredFlights,
  sortFilteredList,
  setOneWay,
  setFilteredReturnList,
} = FlightService.actions;

export const getFlights = (state) => state.flight;
