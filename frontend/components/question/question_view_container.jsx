import { connect } from 'react-redux';
import { fetchQuestion, deleteQuestion } from '../../actions/question_actions';
import { fetchAnswers, createAnswer } from '../../actions/answer_actions';
import QuestionView from './question_view';
import { selectAllAnswers } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    answers: selectAllAnswers(state),
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    fetchAnswers: () => dispatch(fetchAnswers()),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
    createAnswer: answer => dispatch(createAnswer(answer)),
  };
};

export default connect(msp, mdp)(QuestionView);
