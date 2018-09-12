import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const msp = state => {
  return {
    form: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    formType: "Sign Up",
  };
};

const mdp = dispatch => {
  return{
    processForm: user => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
