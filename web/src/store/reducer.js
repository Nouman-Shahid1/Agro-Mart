import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducers/Auth/authSlice";
import productSlice from "@/reducers/product/productSlice";
import categorySlice from "@/reducers/Category/categorySlice";
import orderSlice from "@/reducers/Order/orderSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  product:productSlice,
  category:categorySlice,
  orders: orderSlice,
  
});

export default rootReducer;
