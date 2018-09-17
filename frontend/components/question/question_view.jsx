import React from 'react';
import Avatar from 'react-avatar';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestionItem = this.deleteQuestionItem.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      showDropDown: false,
    };
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  deleteQuestionItem() {
    if (this.props.currentUser.id === this.props.question.author_id) {
      this.props.deleteQuestion(this.props.question.id);
    } else {
      return alert("Can't delete a question you did not ask!");
    }
  }

  toggleDropDown() {
    if (this.state.showDropDown === false) {
      $('.edit-dropdown').addClass('edit-dropdown-show');
    } else {
      $('.edit-dropdown').removeClass('edit-dropdown-show');
    }
    this.setState({ showDropDown: !this.state.showDropDown });
  }

  render() {
    const question = this.props.question || {body: ''};
    const currentUserName = this.props.currentUser.first_name + ' ' +
    this.props.currentUser.last_name;

    if (!this.props.question) {
      return (
        <div className='question-prompt-container'>
          <i className="far fa-trash-alt" size='7x'></i>
          <div className='prompt-title'>
            This question has been deleted or does not exist.
          </div><br/>
          <Link to='/index' className='prompt-link'>Que Home</Link>
        </div>
      );
    } else {
      return (
        <div>
          <div className='question-item-container'>
            <span onClick={ this.deleteQuestionItem }
              className='question-delete-button'>&times;</span>
            <div className='question-item-body'>
              { question.body }
            </div>

            <div className='buttons'>
              <div className='answer-button'>
                <i className="far fa-edit"></i>
                Answer
              </div>

            <div className='buttons-left'>
              <div className='edit-button'
                onClick={ this.toggleDropDown }>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className='edit-dropdown'>
                Edit
              </div>
            </div>

            </div>
          </div>

          <div className='user-prompt-container'>
            <Avatar className='avatar'
              name={currentUserName} round={true} color='#619ad1'
              size='50' textSizeRatio={1.5} />
            <div className='user-prompt-1'>
              {this.props.currentUser.first_name}, can you answer this question?
            </div>

            <div className='user-prompt-2'>
              People are searching for a better answer to this question.
            </div>
            <div>
              <button>Answer</button>
            </div>
          </div>
        </div>
      );
    }
  }
}
