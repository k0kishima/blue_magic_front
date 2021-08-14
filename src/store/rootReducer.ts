import { combineReducers } from "redux";
import { settingApi } from "services/settings";
import settingReducer from "store/setting";

const rootReducer = combineReducers({
  setting: settingReducer,
  [settingApi.reducerPath]: settingApi.reducer,
});

export default rootReducer;
