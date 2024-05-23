import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPopularLocations = createAsyncThunk(
  'tour/fetchPopularLocations',
  async () => {
      let  URL = 'http://localhost:8000/api/v1/tours/top-location'
      const response = await axios.get(URL);
      return response.data.data;
  }
);

const initialState = {
  popularLocations: [],
  loading: false,
  error: null,
};

const popularLocationSlice = createSlice({
  name : "location",
  initialState,
  reducers: {
    // You can also add non-async actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.popularLocations = action.payload;
      })
      .addCase(fetchPopularLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})


export default popularLocationSlice.reducer;