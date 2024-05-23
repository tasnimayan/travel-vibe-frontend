import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryList = createAsyncThunk(
  'categories/fetchCategoryList',
  async (_, { rejectWithValue }) => {
    try {
      let  URL = 'http://localhost:8000/api/v1/category'
      const response = await axios.get(URL);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  categoryList: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name : "category",
  initialState,
  reducers: {
    // You can also add non-async actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryList.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryList = action.payload;
      })
      .addCase(fetchCategoryList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Handle other async thunks similarly
  },
})


export default categorySlice.reducer;