import React from 'react';

const QuestionIndexItem = props => {
  return (
    <div className='question-item-box'>
      <p>{ props.question.body }</p>
    </div>
  );
}

export default QuestionIndexItem;
