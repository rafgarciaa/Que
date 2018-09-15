import React from 'react';

export default class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='question-modal-container'>
        <div className='question-modal-link'>Add a question...</div>
      </div>
    );
  }
}
