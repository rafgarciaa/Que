import React from 'react';
import { Link } from 'react-router-dom';

export default class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let topicName = this.props.topics[this.props.question.topic_id].name;
    let deleteButton;
    if (this.props.currentUser.id === this.props.question.author_id) {
      deleteButton = <span onClick={
          () => this.props.deleteQuestion(
            this.props.question.id,
            this.props.question.author_id
          )
        }
        className='question-delete-button'>&times;</span>;
    } else {
      deleteButton = null;
    }

    return (
      <div className='answer-item-box'>
        { deleteButton }
        <div className='answer-item-header'>
          Question asked · <Link to={`/topics/${this.props.question.topic_id}`}
          className='answer-topic-link'>{ topicName }</Link>
        </div><br/>

        <Link className='answer-item-body'
          to={`/questions/${this.props.question.id}`}>
          { this.props.question.body }
        </Link>

        <div className='comments'>No answers yet</div>

        <div className='answer-button'>
          <i className="far fa-edit"></i>
          Answer
        </div>
      </div>
    );
  }
}
