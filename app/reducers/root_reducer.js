import { combineReducers } from "redux";
import uiReducer from "./ui_reducer";

const rootReducer = () => {
	return {
		//some reducer
		ui: uiReducer,
	};
};

export default rootReducer;
