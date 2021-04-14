import { connect } from 'react-redux';
import ResourcesComponent from './resources_component';

import { showResource } from '../../../actions/resource_actions';

const mapDTP = dispatch => ({
    showResource: resource => dispatch(showResource(resource)),
});

export default connect(null, mapDTP)(ResourcesComponent);