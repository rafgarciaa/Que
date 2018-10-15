import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
// import Answer from '../answer/answer';

export default class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestionItem = this.deleteQuestionItem.bind(this);
  }

  deleteQuestionItem() {
    if (this.props.currentUser.id === this.props.question.author_id) {
      this.props.deleteQuestion(this.props.question.id);
    }
  }

  render() {
    const currentUserName = this.props.currentUser.first_name + ' '
    + this.props.currentUser.last_name;
    const author = this.props.users[this.props.question.author_id]
    || { first_name: '', last_name: '' };
    const askerName = author.first_name + ' ' + author.last_name;

    let topicName;
    if (this.props.topic !== undefined) {
      topicName = this.props.topic.name;
    } else {
      let topic = this.props.topics[this.props.question.topic_id]
      || { topic: '' };
      topicName = topic.name;
    }

    // differentiate color of current user from other users
    // specify if delete button should/should not exist
    let avatar, deleteButton;
    if (currentUserName === askerName) {
      avatar = <Avatar className='avatar' name={askerName} round={true}
        color='#619ad1' size='30' textSizeRatio={1.5} />;
      deleteButton = <span onClick={ this.deleteQuestionItem }
        className='question-delete-button'>&times;</span>;
    } else {
      avatar = <Avatar className='avatar' name={askerName} round={true}
        size='30' textSizeRatio={1.5} />;
      deleteButton = null;
    }


    return (
      <div className='question-item-box'>
        { deleteButton }
        <div className='question-item-header'>

          { avatar }

          <a className='question-asker'>
            { askerName }
          </a> asked · <Link to={`/topics/${this.props.question.topic_id}`}
          className='question-topic-link'>{ topicName }</Link>
        </div>

        <div className='question-item-body'>
          <Link to={`/questions/${this.props.question.id}`}>
            { this.props.question.body }
          </Link>
        </div>

        <div className='buttons'>
          <div className='upvote-button'>
            <i className="fas fa-arrow-up"></i>
            UpVote · { Math.floor(Math.random() * 20) + 1 }
          </div>

          <div className='buttons-right'>
            <div className='downvote-button'>
              <i className="fas fa-arrow-down"></i>
            </div>
          </div>
        </div>

        <div className='question-item-comment-box'>
          <Avatar className='avatar'
            name={currentUserName} round={true} color='#619ad1'
            size='30' textSizeRatio={1.5} />
          <div id='input' className='comment-box'
            contentEditable='true'
            data-text='Add a comment...'/>
          <button className='add-comment-button'>Comment</button>
        </div>
      </div>
    );
  }
}
