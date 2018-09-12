export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
import * as SessionApiUtil from '../util/session_api_util';


const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveSignUpErrors = (errors) => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    errors
  };
};

const receiveLogInErrors = (errors) => {
  return {
    type: RECEIVE_LOGIN_ERRORS,
    errors
  };
};


export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then( (userFromServer) => {
      return dispatch(receiveCurrentUser(userFromServer));
    }, errors => {
      return dispatch(receiveLogInErrors(errors.responseJSON));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then( (userFromServer) => {
      return dispatch(receiveCurrentUser(userFromServer));
    }, errors => {
      return dispatch(receiveSignUpErrors(errors.responseJSON));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionApiUtil.logout().then( () => {
      return dispatch(logoutCurrentUser());
    });
  };
};
