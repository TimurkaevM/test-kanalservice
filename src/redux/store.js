import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: { usersReducer, authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
