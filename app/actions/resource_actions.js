import * as ResourceAPIUtil from '../utils/resource_util';

export const RECEIVE_RESOURCE = 'RECEIVE_RESOURCE';
export const RECEIVE_RESOURCES = 'RECEIVE_RESOURCES';

const receiveResource = resource => ({
    type: RECEIVE_RESOURCE,
    resource
});

const receiveResources = resources => ({
    type: RECEIVE_RESOURCES,
    resources
});

export const showResource = resourceId => dispatch => (
    ResourceAPIUtil.showResource(resourceId)
        .then(resource => dispatch(receiveResource(resource)))
        .catch(errors => console.log(errors))
);

export const fetchResources = () => dispatch => (
    ResourceAPIUtil.fetchResources()
        .then(resources => dispatch(receiveResources(resources)))
        .catch(errors => console.log(errors))
);
