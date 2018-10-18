import React from 'react';
import Avatar from 'react-avatar';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import QuestionFormContainer from './question_form_container';
import EditQuestionFormContainer from './edit_question_form_container';
import AnswerContainer from '../answer/answer_container';
import AnswerEditor from '../answer/answer_editor';
import DeleteModal from '../ui/delete_modal';

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestionItem = this.deleteQuestionItem.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.state = {
      showDropDown: false,
      showEditModal: false,
      showEditor: false,
      showDeleteModal: false,
    };
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
    this.props.fetchAnswers();
  }

  deleteQuestionItem() {
    if (this.props.currentUser.id === this.props.question.author_id) {
      this.props.deleteQuestion(this.props.question.id);
    } else {
      return alert("You can't delete a question you did not ask!");
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

  toggleModal() {
    if (this.props.question.author_id !== this.props.currentUser.id) {
      return alert("You can't edit a question you did not ask!");
    } else {
      this.toggleDropDown();
      this.setState({ showEditModal: !this.state.showEditModal });
    }
  }

  toggleDeleteModal() {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  }

  toggleEditor() {
    if (this.state.showEditor === false) {
      $('.answer-editor-container').addClass('answer-editor-show');
      $('.user-prompt-container').addClass('user-prompt-hide');
    } else {
      $('.answer-editor-container').removeClass('answer-editor-show');
      $('.user-prompt-container').removeClass('user-prompt-hide');
    }
    this.setState({ showEditor: !this.state.showEditor });
  }

  render() {
    const question = this.props.question || {body: '', author_id: 0};
    const currentUserName = this.props.currentUser.first_name + ' ' +
    this.props.currentUser.last_name;

    let deleteButton, deleteModal;
    if (this.props.currentUser.id === question.author_id) {
      deleteButton = <span onClick={ this.toggleDeleteModal }
        className='delete-button'>&times;</span>;
      deleteModal = <Modal
        className='modal-overlay'
        isOpen={ this.state.showDeleteModal }
        contentLabel='Delete Question Modal'
        ariaHideApp={ false }>

        <DeleteModal
          type='question'
          toggleModal={ this.toggleDeleteModal }
          deleteAction={ this.deleteQuestionItem } />

      </Modal>;
    } else {
      deleteButton = null;
    }


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

      let answers, userPrompt;
      if (this.props.question.answerIds.length > 0) {
        answers = <AnswerContainer
          answerIds={ this.props.question.answerIds }
          answers={ this.props.answers }
          />;
      } else {
        userPrompt =
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
              <button onClick={ this.toggleEditor }>Answer</button>
            </div>
          </div>;
      }

      let answerCount = this.props.question.answerIds.length;
      let numAns;
      if (answerCount === 0) {
        numAns = `No answer yet`;
      } else if (answerCount === 1){
        numAns = `${answerCount} Answer`;
      } else {
        numAns = `${answerCount} Answers`;
      }

      return (
        <div>
          <div className='question-item-container'>
            { deleteButton }

            { deleteModal }
            <div className='question-item-body'>
              { question.body }
            </div>

            <div className='buttons'>
              <div className='answer-button' onClick={ this.toggleEditor }>
                <i className="far fa-edit"></i>
                Answer
              </div>

            <div className='buttons-right'>
              <div className='edit-button'
                onClick={ this.toggleDropDown }>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className='edit-dropdown'
                onClick={ this.toggleModal }>
                Edit
              </div>

              <Modal
                className='question-modal-overlay'
                isOpen={ this.state.showEditModal }
                contentLabel='Edit Question Modal'
                ariaHideApp={ false }>

                <EditQuestionFormContainer
                  toggleModal={ this.toggleModal }
                  question={ this.props.question }/>
              </Modal>
            </div>

            </div>

              <div className='answer-count'>
                { numAns }
              </div>

          </div>

          <AnswerEditor
            question={ this.props.question }
            currentUser={ this.props.currentUser }
            toggleEditor={ this.toggleEditor }/>

          { userPrompt }

          { answers }

        </div>
      );
    }
  }
}
