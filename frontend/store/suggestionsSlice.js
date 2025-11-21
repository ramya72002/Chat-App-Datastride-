import { createSlice } from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState: {
    items: [],
  },
  reducers: {
    setSuggestions: (state, action) => {
      state.items = action.payload;
    },
    clearSuggestions: (state) => {
      state.items = [];
    },
  },
});

export const { setSuggestions, clearSuggestions } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;
