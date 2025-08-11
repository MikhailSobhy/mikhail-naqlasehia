import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async function () {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  extraReducers: function (builder) {
    builder.addCase(getAllProducts.pending, function (state) {
      state.status = "loading";
    });
    builder.addCase(getAllProducts.fulfilled, function (state, action) {
      state.status = "success";
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, function (state, action) {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export { getAllProducts };
