import QuestionIndex from './question_index';
import { connect } from 'react-redux';
import {
  fetchQuestions,
  fetchQuestion,
  createQuestion,
  deleteQuestion,
} from '../../actions/question_actions';
import { selectAllQuestions, selectAllAnswers } from '../../reducers/selectors';

const msp = (state, ownProps) => {
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
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    createQuestion: question => dispatch(createQuestion(question)),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
  };
};

export default connect(msp, mdp)(QuestionIndex);
