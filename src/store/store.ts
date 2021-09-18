import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/rootReducer";
import { settingApi } from "services/settings";
import { save, load } from "redux-localstorage-simple";

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([save(), settingApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
