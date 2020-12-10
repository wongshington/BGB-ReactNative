import { CLOSE_MODAL, OPEN_MODAL } from "../action-types/modal_action_types";

const modalReducer = (state = { modal: false }, action) => {
	//
	switch (action.type) {
		case CLOSE_MODAL:
			return { modal: false };
		case OPEN_MODAL:
			return { modal: true };
		default:
			return state;
	}
};

export default modalReducer;
