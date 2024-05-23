import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../state/user/authSlice';
import tourReducer from '../state/tour/tourSlice';
import categoryReducer from "../state/tour/categorySlice";
import locationReducer from "../state/tour/popularLocationSlice";
import reviewReducer from '../state/tour/reviewSlice'


const store = configureStore({
  reducer: {
    auth : authReducer,
    tour : tourReducer,
    category: categoryReducer,
    location: locationReducer,
    review: reviewReducer,
  }
})

export default store;