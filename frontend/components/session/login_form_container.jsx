import LogInForm from './login_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const msp = ({ errors }) => {
  return {
    form: {
      email: '',
      password: '',
    },
    formType: "Log In",
    logInErr: errors.session,
  };
};

const mdp = dispatch => {
  return{
    processForm: user => dispatch(login(user))
  };
};

export default connect(msp, mdp)(LogInForm);
