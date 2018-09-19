import { connect } from 'react-redux';
import { updateQuestion } from '../../actions/question_actions';
import EditQuestionForm from './edit_question_form';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    updateQuestion: question => dispatch(updateQuestion(question)),
  };
};

export default connect(msp, mdp)(EditQuestionForm);
