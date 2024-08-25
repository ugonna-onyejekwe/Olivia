import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  message: "",
  type: "",
};

export const messageSlice = createSlice({
  name: "messager",
  initialState,
  reducers: {
    displayMsg: (state, action) => {
      state.active = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    removeMsg: (state) => {
      state.active = false;
    },
  },
});

export const { displayMsg, removeMsg } = messageSlice.actions;

export default messageSlice.reducer;
