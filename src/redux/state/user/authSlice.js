import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL
import Cookies from "js-cookie";

// Login api call
export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (loginData)=>{
    let URL = `${BASE_URL}/api/v1/users/login/`
    const response = await axios.post(URL, loginData);
    return response.data;
  }
)
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ()=>{
    let URL = `${BASE_URL}/api/v1/users/user/`
    const response = await axios.get(URL,{headers:{authorization:'Bearer ' + Cookies.get('tvUserToken')}});
    const user = {_id:response.data.user._id, name:response.data.user.name, photo:response.data.user.photo}
    return user;
  }
)

export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (userId) => {
    let  URL = `${BASE_URL}/api/v1/users/profile/`
    const response = await axios.get(URL, {headers:{authorization:'Bearer ' + Cookies.get('tvUserToken')}});
    return response.data.data;
  }
);

export const fetchSignUp = async (userData)=>{
  let URL = `${BASE_URL}/api/v1/users/signup`
  const response = await axios.post(URL,userData);
  if(response.status!== 201){
    return false
  }
  Cookies.set('tvUserToken',response.data.token)
  return true;
}
export const fetchOtpVerification = async (otp)=>{
  let URL = `${BASE_URL}/api/v1/users/verify/${otp}`
  let token = Cookies.get('tvUserToken')
  const response = await axios.get(URL,{headers:{authorization:'Bearer '+ token}});
  if(response.status !== 200){
    return false
  }
  return true;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userProfile:null,
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
      .addCase(fetchUserLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.loading = false;
        const user = {_id:action.payload.user._id, name:action.payload.user.name, photo:action.payload.user.photo}
        sessionStorage.setItem("user", JSON.stringify(user))
        Cookies.set('tvUserToken', action.payload.token)
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        sessionStorage.setItem("user", JSON.stringify(action.payload))
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
})
export const { userLogout, currentUser} = authSlice.actions;
export default authSlice.reducer;