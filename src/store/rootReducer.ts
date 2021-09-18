import { combineReducers } from "redux";
import { settingApi } from "services/settings";

const rootReducer = combineReducers({
  [settingApi.reducerPath]: settingApi.reducer,
});

export default rootReducer;
