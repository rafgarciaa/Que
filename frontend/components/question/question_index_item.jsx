import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import Answer from '../answer/answer';

export default class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestionItem = this.deleteQuestionItem.bind(this);
  }

  deleteQuestionItem() {
    if (this.props.currentUser.id === this.props.question.author_id) {
      this.props.deleteQuestion(this.props.question.id);
    } else {
      return alert("Can't delete a question you did not ask!");
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

    let avatar;
    if (currentUserName === askerName) {
      avatar = <Avatar className='avatar' name={askerName} round={true}
        color='#619ad1' size='30' textSizeRatio={1.5} />;
    } else {
      avatar = <Avatar className='avatar' name={askerName} round={true}
        size='30' textSizeRatio={1.5} />;
    }

    return (
      <div className='question-item-box'>
        <span onClick={ this.deleteQuestionItem }
          className='question-delete-button'>&times;</span>
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

        <Answer
          users={ this.props.users }
          answerIds={ this.props.question.answerIds }
          answers={ this.props.answers }/>

        <div className='buttons'>
          <div className='upvote-button'>
            <i className="fas fa-arrow-up"></i>
            UpVote · { Math.floor(Math.random() * 20) + 1 }
          </div>

          <div className='buttons-left'>
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
