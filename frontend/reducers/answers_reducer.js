import {
  RECEIVE_ALL_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
} from '../actions/answer_actions';
import merge from 'lodash/merge';

export default function( state = {}, action ) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ANSWERS:
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
      return merge({}, state, {[action.answer.id]: action.answer});
    case REMOVE_ANSWER:
      const newState = merge({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  }
}