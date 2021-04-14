import * as ResourceAPIUtil from '../utils/resource_util';

export const RECEIVE_RESOURCE = 'RECEIVE_RESOURCE';

const receiveResource = resource => ({
    type: RECEIVE_RESOURCE,
    resource
});

export const showResource = resource => dispatch => (
    ResourceAPIUtil.showResource(resource)
        .then(resource => dispatch(receiveResource(resource)))
        .catch(errors => console.log(errors))
);
