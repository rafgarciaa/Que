import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchQuestions } from '../../actions/question_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchQuestions: () => dispatch(fetchQuestions())
  };
};

export default connect(msp, mdp)(Navbar);
