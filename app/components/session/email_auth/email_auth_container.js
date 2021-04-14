import { connect } from 'react-redux';
import EmailAuthComponent from './email_auth_component';

import { signup, signin } from '../../../actions/session_actions';

const mapDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    signin: user => dispatch(signin(user))
});

export default connect(null, mapDTP)(EmailAuthComponent);