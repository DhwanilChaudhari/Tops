import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", () => {
  return axios.get("https://fakestoreapi.com/products").then((response) => {
    return response.data;
  });
});

let newProduct = createSlice({
  name: "product",
  initialState: { product: [], error: "", pending: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.pending = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.pending = true;
      });
  },
});

export default newProduct.reducer;
