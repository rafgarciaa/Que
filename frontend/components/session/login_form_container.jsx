import LogInForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const msp = state => {
  return {
    form: {
      email: '',
      password: '',
    },
    formType: "Log In",
  };
};

const mdp = dispatch => {
  return{
    processForm: user => dispatch(login(user))
  };
};

export default connect(msp, mdp)(LogInForm);
