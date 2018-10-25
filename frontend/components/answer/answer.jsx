import React from 'react';
import ReactQuill from 'react-quill';
import Avatar from 'react-avatar';
import CommentFormContainer from '../comment/comment_form_container';
import Modal from 'react-modal';
import DeleteModal from '../ui/delete_modal';
import CommentItemContainer from '../comment/comment_item_container';

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openCommentBox: 0, showModal: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleCommentBox(id) {
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

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
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

    let answerer, answererName, avatar, deleteButton, modal;
    const currentUserName = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name;
    return questionAnswers.map( (answer, idx) => {
      answerer = this.props.users[answer.user_id];
      answererName = answerer.first_name + ' ' + answerer.last_name;

      if (currentUserName === answererName) {
        avatar = <Avatar className='avatar' name={answererName} round={true} color='#619ad1' size='30' textSizeRatio={1.5} />;
        deleteButton = <span onClick={ this.toggleModal } className='delete-button'>&times;</span>;
        modal = <Modal className='modal-overlay' isOpen={ this.state.showModal } contentLabel='Delete Question Modal' ariaHideApp={ false }>
                  <DeleteModal type='answer' toggleModal={ this.toggleModal } deleteAction={ () => this.props.deleteAnswer(answer.id) } />
                </Modal>;
      } else {
        avatar = <Avatar className='avatar' name={answererName} round={true} size='30' textSizeRatio={1.5} />;
        deleteButton = null;
        modal = null;
      }

      return (
        <div key={ idx } className='question-answer-item'>
          { avatar }

          <a className='answerer-name'>
            { answererName }
          </a> answered

          { deleteButton }
          { modal }

          <div className='answer-item-body'>
            <ReactQuill readOnly modules={{toolbar: null}} value={answer.body} theme={null} />
          </div>

          <div className='buttons'>
            <div className='upvote-button'>
              <i className="fas fa-arrow-up"></i> UpVote · { Math.floor(Math.random() * 20) + 1 }
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

          <div className={`comment-box comment-box-${answer.id}`}>
            <CommentFormContainer answerId={ answer.id }/>
            <ul className='comment-list-container'>
              <CommentItemContainer commentIds={ answer.commentIds } />
            </ul>
          </div>
        </div>
      );
    });
  }
}
