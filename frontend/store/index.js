import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messagesSlice";
import suggestionsReducer from "./suggestionsSlice";

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    suggestions: suggestionsReducer,
  },
});
