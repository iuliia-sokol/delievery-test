import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchShops } from "service/api";

export const getShops = createAsyncThunk(
    'fetchShops',
    async (_, { rejectWithValue }) => {
      try {
        const data = await fetchShops();
        console.log(data);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.status);
      }
    }
  );