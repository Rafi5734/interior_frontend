import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../redux/authSlice";
import { projectSlice } from "../redux/projectSlice";
import { sliderSlice } from "../redux/sliderSlice";
import { projectSliderSlice } from "../redux/projectSliderSlice";
import { serviceSlice } from "../redux/serviceSlice";
// import { logInApiSlice } from "../features/api/logInApiSlice";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [projectSlice.reducerPath]: projectSlice.reducer,
    [sliderSlice.reducerPath]: sliderSlice.reducer,
    [projectSliderSlice.reducerPath]: projectSliderSlice.reducer,
    [serviceSlice.reducerPath]: serviceSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      authSlice.middleware,
      projectSlice.middleware,
      sliderSlice.middleware,
      projectSliderSlice.middleware,
      serviceSlice.middleware
    ),
});
