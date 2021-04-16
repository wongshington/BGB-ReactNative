import { RECEIVE_USER } from '../../actions/session_actions';

const _nullSession = {
    id: null
};

const sessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_USER:
            return { ...oldState, id: action.user.id };
        default:
            return oldState;
    }
};

export default sessionReducer;