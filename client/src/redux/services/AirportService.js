import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAirports = createAsyncThunk(
  "flights/getAirports",
  async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_LOCAL}/airports`);

    return data;
  }
);
