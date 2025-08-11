import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import singleProductReducer from "./singleProductSlice.js";
export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
  },
});
