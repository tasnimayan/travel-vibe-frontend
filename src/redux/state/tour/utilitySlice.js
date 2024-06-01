import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchOffers = createAsyncThunk(
  'tour/fetchOffers',
  async () => {
    let  URL = BASE_URL + '/api/v1/tours/offers'
    const response = await axios.get(URL);
    return response.data.data;
  }
);


const initialState = {
  offers: [],
  loading: false,
  error: null,
};

const utilitySlice = createSlice({
  name : "utility",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
})


export default utilitySlice.reducer;