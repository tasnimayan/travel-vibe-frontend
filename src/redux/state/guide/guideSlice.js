import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL


export const fetchGuides = createAsyncThunk(
  'guide/fetchGuides',
  async (page) => {
    let  URL = `${BASE_URL}/api/v1/guides?page=${page}`
    const response = await axios.get(URL);
    return response.data;
  }
);
export const fetchGuideDetails = createAsyncThunk(
  'guide/fetchGuideDetails',
  async (guideId) => {
    let  URL = `${BASE_URL}/api/v1/guides/profile/${guideId}`
    const response = await axios.get(URL);
    return response.data.data;
  }
);

export const fetchSearchedGuide = createAsyncThunk(
  'guide/fetchSearchedGuide',
  async (options) => {
    const {location='', country='Bangladesh', language='', page=1} = options
    let URL = `${BASE_URL}/api/v1/guides/search?location=${location}&country=${country}&language=${language}&page=${page}`
    const response = await axios.get(URL);
    return response.data;
  }
);


const initialState = {
  guides: null,
  guideDetails: null,
  totalPages:0,
  loading: false,
  error: null,
};

const guideSlice = createSlice({
  name : "guide",
  initialState,
  reducers: {
    // You can also add non-async actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuides.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGuides.fulfilled, (state, action) => {
        state.loading = false;
        state.guides = action.payload.data;
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchGuides.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchGuideDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGuideDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.guideDetails = action.payload;
      })
      .addCase(fetchGuideDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSearchedGuide.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchedGuide.fulfilled, (state, action) => {
        state.loading = false;
        state.guides = action.payload.data;
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchSearchedGuide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})


export default guideSlice.reducer;