import { createSlice } from '@reduxjs/toolkit';
import { getHistory, setHistory } from './historyOperations';

const pending = (state, { payload }) => {
    state.isFetching = true;
    state.error = null
  };
  const rejected = (state, { payload }) => {
    state.isFetching = false;
    state.error = payload
  };

  const initialState = {
    isFetching: false,
    history: [],
    error: null,
  };
  
  export const historySlice = createSlice({
    name: 'history',
    initialState,
    extraReducers: builder =>
      builder
        .addCase(getHistory.fulfilled, (state, { payload }) => {
          state.history = payload;
          state.isFetching = false;
          state.error = null
        })  
        .addCase(getHistory.pending, pending)
        .addCase(getHistory.rejected, rejected)
        .addCase(setHistory.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.error = null
          })  
          .addCase(setHistory.pending, pending)
          .addCase(setHistory.rejected, rejected)
  });
  
  export default historySlice.reducer;