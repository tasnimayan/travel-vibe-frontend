import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL 

export const fetchPopularLocations = createAsyncThunk(
  'tour/fetchPopularLocations',
  async () => {
    let  URL = BASE_URL+'/api/v1/tours/top-location'
    const response = await axios.get(URL);
    return response.data.data;
  }
);
export const fetchNearbyLocations = createAsyncThunk(
  'tour/fetchNearbyLocations',
  async ({country,location}) => {
    let  URL = `${BASE_URL}/api/v1/tours/nearby-location?country=${country}&location=${location}`
    const response = await axios.get(URL);
    return response.data.data;
  }
);

const initialState = {
  popularLocations: [],
  nearbyLocations:[],
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
      })
      .addCase(fetchNearbyLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNearbyLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.nearbyLocations = action.payload;
      })
      .addCase(fetchNearbyLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})


export default popularLocationSlice.reducer;