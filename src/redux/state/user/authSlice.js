import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:8000/api/v1"
import Cookies from "js-cookie";



export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (loginData)=>{
    let URL = `${BASE_URL}/users/login/`
    const response = await axios.post(URL, loginData);
    return response.data;
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading:false,
    error:null,
  },
  reducers:{
    userLogout: (state) => {
      state.user = null
      state.token = null
    },
    currentUser: (state) =>{
      return state.user
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set('tvUserToken', state.token)
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
})
export const { userLogout, currentUser} = authSlice.actions;
export default authSlice.reducer;