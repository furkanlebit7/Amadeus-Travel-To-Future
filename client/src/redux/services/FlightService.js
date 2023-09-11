import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlights = createAsyncThunk("flights/getFlights", async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_LOCAL}/flights`);

  return data;
});
