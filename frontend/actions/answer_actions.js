export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
import * as AnswerApiUtil from '../util/answer_api_util';

const receiveAnswers = answers => {
  return {
    type: RECEIVE_ALL_ANSWERS,
    answers,
  };
};

const receiveAnswer = answer => {
  return {
    type: RECEIVE_ANSWER,
    answer,
  };
};

const removeAnswer = id => {
  return {
    type: REMOVE_ANSWER,
    answerId: id,
  };
};

export const fetchAnswers = () => {
  return dispatch => {
    return AnswerApiUtil.fetchAnswers().then( answers => {
      return dispatch(receiveAnswers(answers));
    });
  };
};

export const fetchAnswer = id => {
  return dispatch => {
    return AnswerApiUtil.fetchAnswer(id).then( answer => {
      return dispatch(receiveAnswer(answer));
    });
  };
};

export const createAnswer = answer => {
  return dispatch => {
    return AnswerApiUtil.createAnswer(answer).then( answerFromServer => {
      return dispatch(receiveAnswer(answerFromServer));
    });
  };
};

export const deleteAnswer = id => {
  return dispatch => {
    return AnswerApiUtil.deleteAnswer(id).then( () => {
      return dispatch(removeAnswer(id));
    });
  };
};
