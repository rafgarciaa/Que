import React from 'react';
import Avatar from 'react-avatar';

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: '',
      author_id: this.props.currentUser.id,
      topic_id: 1
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createQuestion(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    const name = this.props.currentUser.first_name + ' ' +
    this.props.currentUser.last_name;
    return (
      <div className='question-modal-form'>
        <form className='question-form'>
          <span onClick={ () => this.props.toggleModal() }
            className='modal-close'>&times;</span>

          <div>
            <Avatar className='avatar'
              name={name} round={true} color='#619ad1'
              size='30' textSizeRatio={1.5} />
            <a className='asker-name'>{name}</a>
            <span> added</span>
          </div>

          <input type='text' className='question-input-box'
            placeholder='Start your question with "What","How",
            "Why",etc.'
            value={ this.state.body }
            onChange={ this.update('body') }/>

          <div className='border-line'></div>
        </form>
        <div className='question-form-footer'>
          <a onClick={ () => this.props.toggleModal() }
            className='cancel-question'>Cancel</a>
          <button onClick={ this.handleSubmit }
            className='add-question-button'>Add Question</button>
        </div>
      </div>
    );
  }
}
