import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';
import  merge  from 'lodash/merge';


export default function( state = {}, action ) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
}
