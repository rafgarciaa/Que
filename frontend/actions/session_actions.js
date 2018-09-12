export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
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

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};


export const login = (user) => {
  return (dispatch) => {
    return SessionApiUtil.login(user).then( (userFromServer) => {
      return dispatch(receiveCurrentUser(userFromServer));
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionApiUtil.signup(user).then( (userFromServer) => {
      return dispatch(receiveCurrentUser(userFromServer));
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON));
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
