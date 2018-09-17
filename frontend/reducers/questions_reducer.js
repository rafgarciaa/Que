import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../actions/question_actions';
import { RECEIVE_ALL_TOPICS } from '../actions/topic_actions';
import merge from 'lodash/merge';

export default function( state = {}, action ) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, state, action.questions);

    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});

    case REMOVE_QUESTION:
      const newState = merge({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  }
}
