import { combineReducers } from "redux";
import homeReducer from "./homeReducers";
import profileReducers from "./profileReducers";

export default combineReducers({
  home: homeReducer,
  profile: profileReducers
});
