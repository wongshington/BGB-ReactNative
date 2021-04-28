import { combineReducers } from 'redux';
import users from './users_reducer';
import resources from './resources_reducer';

const entitiesReducer = combineReducers({
    users,
    resources
});

export default entitiesReducer;