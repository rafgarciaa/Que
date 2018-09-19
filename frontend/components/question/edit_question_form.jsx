import React from 'react';

export default class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: this.props.question.id,
      body: this.props.question.body,
      author_id: this.props.currentUser.id,
      topic_id: this.props.question.topic_id,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateQuestion(this.state);
    this.props.toggleModal();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <div className='question-modal-form'>
        <form className='edit-question-form'>

          <div className='edit-form-header'>
            <span onClick={ () => this.props.toggleModal() }
              className='edit-modal-close'>&times;</span>
            <span className='header-title'>Edit Question</span>
          </div>

          <div className='edit-form-content'>
            <input type='text'
              className='edit-form-body'
              value={ this.state.body }
              onChange={ this.update('body') }>
              { this.props.body }
            </input>
          </div>


          <div className='edit-form-footer'>
            <button onClick={ this.handleSubmit }
            className='update-question-button'>Update</button>
            <a onClick={ () => this.props.toggleModal() }
              className='cancel-question'>Cancel</a>
          </div>

        </form>
      </div>
    );
  }
}
