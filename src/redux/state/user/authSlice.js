import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null
  },
  reducers:{
    userLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    userLogout: (state) => {
      state.user = null
      state.token = null
    },
    currentUser: (state) =>{
      debugger;
      return state.user
    }
  }
})
export const {userLogin, userLogout, currentUser} = authSlice.actions;
export default authSlice.reducer;