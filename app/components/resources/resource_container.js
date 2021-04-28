import { connect } from 'react-redux';
import ResourcesComponent from './resources_component';

import { showResource, fetchResources } from '../../actions/resource_actions';

const mapDTP = dispatch => ({
    showResource: resourceId => dispatch(showResource(resourceId)),
    fetchResources: () => dispatch(fetchResources())
});

const mapSTP = state => ({
    resources: Object.values(state.entities.resources)
});

export default connect(mapSTP, mapDTP)(ResourcesComponent);