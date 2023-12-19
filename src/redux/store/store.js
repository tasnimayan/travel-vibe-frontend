import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../state/user/authSlice';


export default configureStore({
  reducer: {
    auth : authReducer
  }
})