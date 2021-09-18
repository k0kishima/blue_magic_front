import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isLoggedIn: boolean;
};

export const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
