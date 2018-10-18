import React from 'react';
import Avatar from 'react-avatar';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      body: '',
      user_id: this.props.currentUser.id,
      answer_id: this.props.answerId,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    const name = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name;
    return (
      <div className={`comment-box comment-box-${this.props.answerId}`} >
        Hi! This is where we render the comment box that toggles.

        <form className='comment-form' onSubmit={ this.handleSubmit }>
          <Avatar className='avatar'
            name={ name } round={true} color='#619ad1'
            size='30' textSizeRatio={1.5} />
          <input
            className='comment-input-box'
            type='text'
            placeholder='Add a comment...'
            value={ this.state.body }
            onChange={ this.update('body') }
            />
          <button className='add-comment-button'>Comment</button>
        </form>
      </div>
    );
  }
}
