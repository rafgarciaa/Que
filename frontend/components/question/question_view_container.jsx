import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import QuestionView from './question_view';

const msp = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId]
  };
};

const mdp = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id))
  };
};

export default connect(msp, mdp)(QuestionView);
