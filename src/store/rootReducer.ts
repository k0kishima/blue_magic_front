import { combineReducers } from "redux";
import settingReducer from "store/setting";

const rootReducer = combineReducers({
  setting: settingReducer,
});

export default rootReducer;
