import {
  RECEIVE_LOGIN_ERRORS,
  RECEIVE_SIGNUP_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_LOGIN_ERRORS:
      newState = {
        type: 'Log In',
        errors: action.errors,
      };
      return newState;
    case RECEIVE_SIGNUP_ERRORS:
      newState = {
        type: 'Sign Up',
        errors: action.errors,
      };
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
