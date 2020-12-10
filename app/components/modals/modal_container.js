import { connect } from "react-redux";

import { toggleModal } from "../../actions/modal_actions";
import TextModal from "./text_modal";

const mSP = ({ ui }) => {
	return {
		open: ui.modal,
	};
};
const mDP = (dispatch) => ({
	toggleModal: (bool) => dispatch(toggleModal(bool)),
});

export default connect(mSP, mDP)(TextModal);
