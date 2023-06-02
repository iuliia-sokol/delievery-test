import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHistory, updateHistory } from "service/api";

export const getHistory = createAsyncThunk(
    'fetchHistory',
    async (_, { rejectWithValue }) => {
      try {
        const data = await fetchHistory();
        return data;
      } catch (error) {
        return rejectWithValue(error.response.status);
      }
    }
  );


export const setHistory = createAsyncThunk(
    'updateHistory',
    async (order, { rejectWithValue }) => {
      try {
        const data = await updateHistory(order);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.status);
      }
    }
  );