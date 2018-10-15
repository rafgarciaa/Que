import React from 'react';
import Avatar from 'react-avatar';
import CommentFormContainer from '../comment/comment_form_container';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openCommentBox: 0 };
  }

  toggleCommentBox(id) {
    debugger
    return () => {
      $(`.comment-box`).removeClass('comment-box-show');

      if (id === this.state.openCommentBox) {
        $(`.comment-box-${id}`).removeClass('comment-box-show');
        this.setState({ openCommentBox: 0 });
      } else {
        $(`.comment-box-${this.state.openCommentBox}`).removeClass('comment-box-show');
        $(`.comment-box-${id}`).addClass('comment-box-show');
        this.setState({ openCommentBox: id });
      }
    };
  }

  render() {
    const questionAnswers = [];
    if (this.props.answerIds.length > 0) {
      for (let i = 0; i < this.props.answerIds.length; i++) {
        let answerId = this.props.answerIds[i];

        this.props.answers.map( answer => {
          if (answer.id === answerId) {
            questionAnswers.push(answer);
          }
        });
      }
    }

    let answerer, answererName, avatar;
    const currentUserName = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name;
    return questionAnswers.map( (answer, idx) => {
      answerer = this.props.users[answer.user_id];
      answererName = answerer.first_name + ' ' + answerer.last_name;

      if (currentUserName === answererName) {
        avatar = <Avatar className='avatar' name={answererName} round={true}
          color='#619ad1' size='30' textSizeRatio={1.5} />;
      } else {
        avatar = <Avatar className='avatar' name={answererName} round={true}
          size='30' textSizeRatio={1.5} />;
      }

      return (
        <div key={ idx } className='question-answer-item'>
          { avatar }

          <a className='answerer-name'>
            { answererName }
          </a> answered

          <div className='answer-item-body'>
            { answer.body }
          </div>

          <div className='buttons'>
            <div className='upvote-button'>
              <i className="fas fa-arrow-up"></i>
              UpVote · { Math.floor(Math.random() * 20) + 1 }
            </div>

            <div className='buttons-right'>
              <div className='comment-button' onClick={ this.toggleCommentBox(answer.id) }>
                <i className="far fa-comment"></i>
              </div>

              <div className='downvote-button'>
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>
          </div>

          <div>
            <CommentFormContainer answerId={ answer.id }/>
          </div>
        </div>
      );
    });
  }
}
