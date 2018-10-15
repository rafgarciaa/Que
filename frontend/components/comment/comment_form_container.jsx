import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
  };
};

export default connect(msp, mdp)(CommentForm);
