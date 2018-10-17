import React from 'react';
import Avatar from 'react-avatar';
import Modal from 'react-modal';
import QuestionFormContainer from './question_form_container';

export default class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = { showModal: false };
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const name = this.props.currentUser.first_name + ' ' +
    this.props.currentUser.last_name;
    return(
      <div className='question-modal-container'>
        <div className='question-modal-avatar'>
          <Avatar className='avatar'
            name={name} round={true} color='#619ad1'
            size='30' textSizeRatio={1.5} />
          <a className='asker-name'>{ name }</a>
        </div>

        <a className='question-modal-link'
          onClick={ this.toggleModal }>
          Add a question...
        </a>

        <Modal
          className='question-modal-overlay'
          isOpen={ this.state.showModal }
          contentLabel='Add Question Modal'
          ariaHideApp={false}>

          <QuestionFormContainer toggleModal={ this.toggleModal } />
        </Modal>

      </div>
    );
  }
}
