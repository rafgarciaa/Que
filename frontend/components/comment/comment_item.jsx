import React from 'react';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let answerComments = [];
    if (this.props.commentIds.length > 0) {
      for(let i = 0; i < this.props.commentIds.length; i++) {
        let commentId = this.props.commentIds[i];

        this.props.comments.map( comment => {
          if (comment.id === commentId) {
            answerComments.push(comment);
          }
        });
      }
    }

    return answerComments.map( (comment, jdx) => {
      return (
        <li key={ jdx }>
          { comment.body }
        </li>
      );
    });

  }
}
