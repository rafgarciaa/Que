import React from 'react';

export default class AnswerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='answer-index-container'>
        <div className='answer-header-container'>
          <i class="far fa-star"></i>
          Questions for You
        </div>
      </ul>
    );
  }
}
