import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "Count",
  initialState: { count: 0 },
  reducers: {
    incrementCount: (state, action) => {
      store.count++;
    },
    incByValue: (state, action) => {
      state.count = state.count;
      ++action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("user/addUser", (state, action) => {
      state.count++;
    });
  },
});

export default countSlice.reducer;
export const { incrementCount } = countSlice.actions;
