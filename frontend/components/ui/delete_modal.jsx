import React from 'react';

// props will take in the following data:
// type: type of data to delete (question, answer, comment, etc.)
// toggleModal: function that toggles the modal for that specific component
// action: dipsatch the delete action for either question, answer, comment, etc.

const DeleteModal = props => {

  const _handleAction = () => {
    props.toggleModal();
    props.action();
  };

  return (
    <div className='delete-modal-form'>
      <div className='delete-modal-body'>
        <h4>{ `Delete ${props.type}?` }</h4>

        <p>
          {`Are you sure you would like to delete this ${props.type}?
          This action cannot be undone.`}
        </p>
      </div>

      <div className='delete-modal-footer'>
        <a onClick={ () => props.toggleModal() } className='cancel-delete'>
          Cancel
        </a>

        <button onClick={ () => _handleAction() } className=''>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
