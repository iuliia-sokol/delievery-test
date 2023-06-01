import { createSlice } from '@reduxjs/toolkit';
import { getShops } from './shopsOperations';

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
    shops: [],
    error: null,
  };
  
  export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    extraReducers: builder =>
      builder
        .addCase(getShops.fulfilled, (state, { payload }) => {
          state.shops = payload;
          state.isFetching = false;
          state.error = null
        })  
        .addCase(getShops.pending, pending)
        .addCase(getShops.rejected, rejected)
       
  });
  
  export default shopsSlice.reducer;
  