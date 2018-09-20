import AnswerIndex from './answer_index';
import { connect } from 'react-redux';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import { fetchAnswers } from '../../actions/answer_actions';
import { selectAllQuestions, selectAllAnswers } from '../../reducers/selectors';

const msp = state => {
  return {
    users: state.entities.users,
    topics: state.entities.topics,
    currentUser: state.entities.users[state.session.id],
    questions: selectAllQuestions(state),
    answers: selectAllAnswers(state),
  };
};

const mdp = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchAnswers: () => dispatch(fetchAnswers()),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
  };
};

export default connect(msp, mdp)(AnswerIndex);
