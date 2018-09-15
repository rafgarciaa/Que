import QuestionIndex from './question_index';
import { connect } from 'react-redux';
import {
  fetchQuestions,
  fetchQuestion,
  createQuestion
} from '../../actions/question_actions';
import { selectAllQuestions } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  return {
    questions: selectAllQuestions(state)
  };
};

const mdp = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    createQuestion: question => dispatch(createQuestion(question)),
  };
};

export default connect(msp, mdp)(QuestionIndex);
