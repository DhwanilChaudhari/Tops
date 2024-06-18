import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "name",
  initialState: { user: [] },
  reducers: {
    addUser: (state, action) => {
      console.log("Adding User");
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
