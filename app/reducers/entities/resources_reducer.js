import { RECEIVE_RESOURCE } from '../../actions/resource_actions';

const resourceReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_RESOURCE:
            return { ...oldState, [action.resource.id]: action.resource };
        default:
            return oldState;
    }
};

export default resourceReducer;