import { RECEIVE_RESOURCE, RECEIVE_RESOURCES } from '../../actions/resource_actions';

const resourceReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_RESOURCE:
            return { ...oldState, [action.resource.id]: action.resource };
        case RECEIVE_RESOURCES:
            let newState = Object.assign({}, oldState);
            action.resources.forEach(resource => {
                newState[resource.id] = resource;
            });
            return newState;
        default:
            return oldState;
    }
};

export default resourceReducer;