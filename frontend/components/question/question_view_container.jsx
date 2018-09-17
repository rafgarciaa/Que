import { connect } from 'react-redux';
import { fetchQuestion, deleteQuestion } from '../../actions/question_actions';
import QuestionView from './question_view';

const msp = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
  };
};

export default connect(msp, mdp)(QuestionView);
