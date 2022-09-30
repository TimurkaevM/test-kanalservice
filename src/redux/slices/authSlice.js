import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: "admin",
    password: "admin",
    isAuth: false,
    error: null,
  },
  reducers: {
    onLogin: (state, action) => {
      const { login, password, handlePush } = action.payload;

      if (login === state.login && password === state.password) {
        state.isAuth = true;
        handlePush();
      } else {
        state.error = "Неверный логин или пароль";
      }
    },
    changeError: (state) => {
      state.error = null;
    },
    logOut: (state) => {
      state.isAuth = true;
    },
  },
});

export const { onLogin, changeError, logOut } = authSlice.actions;

export default authSlice.reducer;
