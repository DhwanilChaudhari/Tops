import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import userSlice from "./user";
import newProduct from "./product";
export const store = configureStore({
  reducer: {
    COUNT: countSlice,
    userSlice: userSlice,
    newProduct,
  },
});
