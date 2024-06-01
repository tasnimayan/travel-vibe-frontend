import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchTours = createAsyncThunk(
  'tours/fetchTourList',
  async (page) => {
    let URL
    if(!page){
      URL = `${BASE_URL}/api/v1/tours`
    }
    else{
      URL = `${BASE_URL}/api/v1/tours?page=${page}`
    }
    const response = await axios.get(URL);
    return response.data;

  }
);

export const fetchSearchedTours = createAsyncThunk(
  'tours/fetchSearchedTours',
  async (options) => {
    const {location='', country='Bangladesh', startDate=''} = options
    // Search Tour API fetch
    let URL = `${BASE_URL}/api/v1/tours/search?location=${location}&country=${country}&startDate=${startDate}`
    const response = await axios.get(URL);
    return response.data;
  }
);

export const fetchTourDetails = createAsyncThunk(
  'tours/fetchTourDetails',
  async (tourId) => {
    // Get Tour Details
    let URL = `${BASE_URL}/api/v1/tours/tour/${tourId}`
    const response = await axios.get(URL);
    return response.data;
  }
);

export const fetchDiscountedTours = createAsyncThunk(
  'tours/fetchDiscountedTours',
  async () => {
    // Get Tour Details
    let URL = `${BASE_URL}/api/v1/tours/discount`
    const response = await axios.get(URL);
    return response.data;
  }
);

const initialState = {
  tourList: [],
  totalPages:0,
  discountedTours:[],
  tourDetails:null,
  loading: false,
  error: null,
};

const tourSlice = createSlice({
  name : "tour",
  initialState,
  reducers: {
    // You can also add non-async actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;

        state.tourList = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Searched Tour cases
      .addCase(fetchSearchedTours.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchedTours.fulfilled, (state, action) => {
        state.loading = false;
        state.tourList = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchSearchedTours.rejected, (state, action) => {
        state.loading = false;
        console.log("rejected:", action.payload)
        state.tourList = []
        state.error = action.payload;
      })
      .addCase(fetchTourDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTourDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.tourDetails = action.payload.data;
      })
      .addCase(fetchTourDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDiscountedTours.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiscountedTours.fulfilled, (state, action) => {
        state.loading = false;
        state.discountedTours = action.payload.data;
      })
      .addCase(fetchDiscountedTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      ;
    // Handle other async thunks similarly
  },
})


// export const {} = tourSlice.actions;
export default tourSlice.reducer;