import { combineReducers } from "redux";
import uiReducer from "./ui_reducer";

export default combineReducers({
	ui: uiReducer,
});
