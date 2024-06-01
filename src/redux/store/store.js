import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../state/user/authSlice';
import tourReducer from '../state/tour/tourSlice';
import categoryReducer from "../state/tour/categorySlice";
import locationReducer from "../state/tour/locationSlice";
import reviewReducer from '../state/tour/reviewSlice'
import utilityReducer from '../state/tour/utilitySlice'


const store = configureStore({
  reducer: {
    auth : authReducer,
    tour : tourReducer,
    category: categoryReducer,
    location: locationReducer,
    review: reviewReducer,
    utility: utilityReducer,
  }
})

export default store;