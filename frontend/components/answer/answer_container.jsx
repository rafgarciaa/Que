import Answer from './answer';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answer_actions';
import { fetchQuestion } from '../../actions/question_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    fetchQuestion: id => dispatch(fetchQuestion(id)),
    deleteAnswer: id => dispatch(deleteAnswer(id)),
  };
};

export default connect(msp, mdp)(Answer);
