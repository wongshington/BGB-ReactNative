import { OPEN_MODAL, CLOSE_MODAL } from "../action-types/modal_action_types";

//action creators
const openModal = () => ({
	type: OPEN_MODAL,
});
const closeModal = () => ({
	type: CLOSE_MODAL,
});

// action creator
export const toggleModal = (bool) => {
	return bool ? openModal() : closeModal();
};
