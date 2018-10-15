export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
import * as CommentApiUtil from '../util/comment_api_util';

const receiveComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments,
  };
};

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

const removeComment = id => {
  return {
    type: REMOVE_COMMENT,
    commentId: id,
  };
};

export const fetchComments = () => {
  return dispatch => {
    return CommentApiUtil.fetchComments().then( comments => {
      return dispatch(receiveComments(comments));
    });
  };
};

export const fetchComment = id => {
  return dispatch => {
    return CommentApiUtil.fetchComment(id).then( comment => {
      return dispatch(receiveComments(comment));
    });
  };
};

export const createComment = comment => {
  return dispatch => {
    return CommentApiUtil.createComment(comment).then( commentFromServer => {
      return dispatch(receiveComments(commentFromServer));
    });
  };
};

export const deleteComment = id => {
  return dispatch => {
    return CommentApiUtil.deleteComment(id).then( () => {
      return dispatch(receiveComments(id));
    });
  };
};
