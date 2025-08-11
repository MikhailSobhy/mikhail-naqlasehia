import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getSingleProduct = createAsyncThunk(
  "singleProduct/getSingleProduct",
  async function (id) {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    product: "",
    status: "idle",
    error: null,
  },
  extraReducers: function (builder) {
    builder.addCase(getSingleProduct.pending, function (state) {
      state.status = "loading";
    });
    builder.addCase(getSingleProduct.fulfilled, function (state, action) {
      state.status = "success";
      state.product = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, function (state, action) {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default singleProductSlice.reducer;
export { getSingleProduct };
