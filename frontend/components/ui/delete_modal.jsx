import React from 'react';

// props will take in the following data:
// type: type of data to delete (question, answer, comment, etc.)
// toggleModal: function that toggles the modal for that specific component
// action: dipsatch the delete action for either question, answer, comment, etc.

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }

  async handleAction() {
    await this.props.deleteAction();
    this.props.toggleModal();
    this.props.fetchAction();
  }

  render() {
    return (
      <div className='delete-modal-form'>
        <div className='delete-modal-body'>
          <h4>{ `Delete ${this.props.type}?` }</h4>

          <p>
            {`Are you sure you would like to delete this ${this.props.type}?
            This action cannot be undone.`}
          </p>
        </div>

        <div className='delete-modal-footer'>
          <a onClick={ () => this.props.toggleModal() } className='cancel-delete'>
            Cancel
          </a>

          <button onClick={ () => this.handleAction() } className=''>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
