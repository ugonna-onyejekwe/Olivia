import { configureStore } from "@reduxjs/toolkit";
import messager from "./messageSlice";

export const store = configureStore({
  reducer: {
    messager,
  },
});
