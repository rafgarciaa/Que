export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUES_ERRORS = 'RECEIVE_QUES_ERRORS';
import * as QuestionApiUtil from '../util/question_api_util';

const receiveQuestions = questions => {
  return {
    type: RECEIVE_ALL_QUESTIONS,
    questions
  };
};

const receiveQuestion = question => {
  return {
    type: RECEIVE_QUESTION,
    question
  };
};

const removeQuestion = id => {
  return {
    type: REMOVE_QUESTION,
    questionId: id
  };
};

const receiveQuesErrors = errors => {
  return {
    type: RECEIVE_QUES_ERRORS,
    errors
  };
};

export const fetchQuestions = () => {
  return dispatch => {
    return QuestionApiUtil.fetchQuestions().then( questions => {
      return dispatch(receiveQuestions(questions));
    });
  };
};

export const fetchQuestion = id => {
  return dispatch => {
    return QuestionApiUtil.fetchQuestion(id).then( question => {
      return dispatch(receiveQuestion(question));
    });
  };
};

export const createQuestion = question => {
  return dispatch => {
    return QuestionApiUtil.createQuestion(question).then( quesFromServer => {
      return dispatch(receiveQuestion(quesFromServer));
    });
  };
};

// additional feature later
// export const updateQuestion = question => {
//   return dispatch => {
//     return QuestionApiUtil.updateQuestion(question).then( quesFromServer => {
//       return dispatch(receiveQuestion(quesFromServer));
//     });
//   };
// };

export const deleteQuestion = id => {
  return dispatch => {
    return QuestionApiUtil.deleteQuestion(id).then( question => {
      return dispatch(removeQuestion(question.id));
    });
  };
};
