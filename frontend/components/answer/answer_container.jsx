import Answer from './answer';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answer_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    deleteAnswer: id => dispatch(deleteAnswer(id)),
  };
};

export default connect(msp, mdp)(Answer);
