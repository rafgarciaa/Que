import React from 'react';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteQuestionItem = this.deleteQuestionItem.bind(this);
  }

  // deleteQuestionItem() {
  //   if (this.props.currentUser !== this.props.question.author_id) {
  //
  //   }
  // }

  render() {
    const author = this.props.users[this.props.question.author_id]
    || { first_name: '', last_name: '' };
    const askerName = author.first_name + ' ' + author.last_name;

    const topic = this.props.topics[this.props.question.topic_id]
    || { topic: '' };
    const topicName = topic.name;

    return (
      <div className='question-item-box'>
        <span>&times;</span>
        <div className='question-item-header'>
          <a className='question-asker'>
            { askerName }
          </a> asked · <a className='question-topic-link'>{ topicName }</a>
        </div>

        <div className='question-item-body'>{ this.props.question.body }</div>
      </div>
    );
  }
}

export default QuestionIndexItem;
