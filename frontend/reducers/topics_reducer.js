import {
  RECEIVE_ALL_TOPICS,
  RECEIVE_TOPIC,
} from '../actions/topic_actions';
import { RECEIVE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

export default function( state = {}, action ) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_TOPICS:
      return merge({}, state, action.topics);

    case RECEIVE_TOPIC:
      return merge({}, state, {[action.topic.id]: action.topic});

    default:
      return state;
  }
}
