import React from 'react';
import Avatar from 'react-avatar';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      body: '',
      user_id: this.props.currentUser.id,
      answer_id: this.props.answerId, // change this later; answer will be passed as props later in answer.js
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
  }

  render() {
    const name = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name;
    return (
      <div className={`comment-box comment-box-${this.props.answerId}`} >
        Hi! This is where we render the comment box that toggles.

        <form className='comment-form' onSubmit={ this.handleSubmit }>

        </form>
      </div>
    );
  }
}
