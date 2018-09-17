export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
import * as TopicApiUtil from '../util/topic_api_util';

const receiveTopics = topics => {
  return {
    type: RECEIVE_ALL_TOPICS,
    topics
  };
};

const receiveTopic = topic => {
  return {
    type: RECEIVE_TOPIC,
    topic
  };
};

export const fetchTopics = () => {
  return dispatch => {
    return TopicApiUtil.fetchTopics().then( topics => {
      return dispatch(receiveTopics(topics));
    });
  };
};

export const fetchTopic = id => {
  return dispatch => {
    return TopicApiUtil.fetchTopic(id).then( topic => {
      return dispatch(receiveTopic(topic));
    });
  };
};
