import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import merge from 'lodash/merge';

export default function( state = {}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      const newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
}
