import React from 'react';

const Answer = props => {
  const questionAnswers = [];
  if (props.answerIds.length > 0) {
    for (let i = 0; i < props.answerIds.length; i++) {
      let answerId = props.answerIds[i];

      props.answers.map( answer => {
        if (answer.id === answerId) {
          // debugger
          questionAnswers.push(answer);
        }
      });
    }
  }

  return questionAnswers.map( (answer, idx) => {
    return (
      <div key={ idx } className='question-answer-item'>
        { answer.body }
      </div>
    );
  });
};

export default Answer;
