import * as SessionAPIUtil from '../utils/session_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(errors => console.log(errors))
);

export const signin = user => dispatch => (
    SessionAPIUtil.signin(user)
        .then(user => dispatch(receiveUser(user)))
        .catch(errors => console.log(errors))
);