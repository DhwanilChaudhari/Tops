import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from "./accordionSlice";

export const store = configureStore({
  reducer: {
    accordion: accordionReducer,
  },
});
