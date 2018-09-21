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

  // debugger
  let name;
  return questionAnswers.map( (answer, idx) => {
    name = props.users[answer.user_id].first_name;

    return (
      <div key={ idx } className='question-answer-item'>
        { name } says · { answer.body }
      </div>
    );
  });
};

export default Answer;
