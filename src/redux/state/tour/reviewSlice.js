import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk(
  'tour/fetchReviews',
  async (tourId) => {
      let  URL = `http://localhost:8000/api/v1/tours//tour/${tourId}/reviews`
      const response = await axios.get(URL);
      return response.data.data;
  }
);

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewSlice = createSlice({
  name : "review",
  initialState,
  reducers: {
    // You can also add non-async actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})


export default reviewSlice.reducer;