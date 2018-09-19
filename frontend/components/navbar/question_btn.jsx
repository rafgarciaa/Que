import React from 'react';
import Modal from 'react-modal';
import QuestionFormContainer from '../question/question_form_container';

class QuestionButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false
    };
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        <button className='header-btn'
          onClick={ this.toggleModal }>Add</button>
        <Modal
          className='question-modal-overlay'
          isOpen={ this.state.showModal }
          contentLabel='Add Question Modal'
          ariaHideApp={ false }>

          <QuestionFormContainer toggleModal={ this.toggleModal } />
        </Modal>
      </div>
    );
  }
}

export default QuestionButton;
