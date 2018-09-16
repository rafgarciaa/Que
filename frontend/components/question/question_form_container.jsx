import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';
import QuestionForm from './question_form';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    createQuestion: question => dispatch(createQuestion(question))
  };
};

export default connect(msp, mdp)(QuestionForm);
