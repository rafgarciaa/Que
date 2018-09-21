import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../actions/question_actions';
import { RECEIVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_ALL_TOPICS } from '../actions/topic_actions';
import merge from 'lodash/merge';

export default function( state = {}, action ) {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, state, action.questions);

    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});

    case REMOVE_QUESTION:
      newState = merge({}, state);
      delete newState[action.questionId];
      return newState;

    case RECEIVE_ANSWER:
      newState = merge({}, state);
      const answerIdsArr = newState[action.answer.question_id].answerIds;
      answerIdsArr.push(action.answer.id);
      return newState;
    default:
      return state;
  }
}
