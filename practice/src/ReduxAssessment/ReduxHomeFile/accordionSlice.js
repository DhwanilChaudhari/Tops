import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, title: "Reveal title", content: "CodeWithUs", isOpen: false },
    {
      id: 2,
      title: "Reveal Subtitle",
      content: "Journey that never ends",
      isOpen: false,
    },
    { id: 3, title: "Conclusion", content: "Never Backoff", isOpen: false },
  ],
};

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    toggleAccordion: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.isOpen = !item.isOpen;
      }
    },
  },
});

export const { toggleAccordion } = accordionSlice.actions;
export default accordionSlice.reducer;
