import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/rootReducer";
import { settingApi } from "services/settings";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(settingApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
