import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentification",
  initialState: { isLoggedIn: true, name: "douaa bousnina" },
  extraReducers: {},
  reducers: {
    LogInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { LogInOut } = authSlice.actions;

export default authSlice.reducer;
