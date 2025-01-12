import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../redux/authSlice";
import { projectSlice } from "../redux/projectSlice";
// import { logInApiSlice } from "../features/api/logInApiSlice";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [projectSlice.reducerPath]: projectSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      authSlice.middleware,
      projectSlice.middleware
    ),
});
