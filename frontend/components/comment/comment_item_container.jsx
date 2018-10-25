import CommentItem from './comment_item';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import { selectAllComments } from '../../reducers/selectors';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    comments: selectAllComments(state),
  };
};

const mdp = dispatch => {
  return {
    deleteComment: id => dispatch(deleteComment(id)),
  };
};

export default connect(msp, mdp)(CommentItem);
