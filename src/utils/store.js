import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../redux/authSlice";
// import { logInApiSlice } from "../features/api/logInApiSlice";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
        authSlice.middleware,
    ),
});