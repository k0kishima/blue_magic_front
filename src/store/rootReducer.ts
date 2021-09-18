import { combineReducers } from "redux";
import { settingApi } from "services/settings";
import authReducer from "store/auth";

const rootReducer = combineReducers({
  auth: authReducer,
  [settingApi.reducerPath]: settingApi.reducer,
});

export default rootReducer;
