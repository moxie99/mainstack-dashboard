import { configureStore } from "@reduxjs/toolkit";
import { dashboardApi } from "./services/dashboardApi";

export const store = configureStore({
  reducer: {
    
    [dashboardApi.reducerPath] : dashboardApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([dashboardApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
