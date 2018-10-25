import {
  RECEIVE_ALL_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
} from '../actions/answer_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

export default function( state = {}, action ) {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ANSWERS:
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
      return merge({}, state, {[action.answer.id]: action.answer});
    case REMOVE_ANSWER:
      newState = merge({}, state);
      delete newState[action.answerId];
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      const commentIdsArr = newState[action.comment.answer_id].commentIds;
      commentIdsArr.push(action.comment.id);
      return newState;
    default:
      return state;
  }
}
