import React from 'react';
import Avatar from 'react-avatar';

const Answer = props => {
  const questionAnswers = [];
  if (props.answerIds.length > 0) {
    for (let i = 0; i < props.answerIds.length; i++) {
      let answerId = props.answerIds[i];

      props.answers.map( answer => {
        if (answer.id === answerId) {
          questionAnswers.push(answer);
        }
      });
    }
  }

  let answerer, answererName, avatar;
  const currentUserName = props.currentUser.first_name + ' ' + props.currentUser.last_name;
  return questionAnswers.map( (answer, idx) => {
    answerer = props.users[answer.user_id];
    answererName = answerer.first_name + ' ' + answerer.last_name;

    if (currentUserName === answererName) {
      avatar = <Avatar className='avatar' name={answererName} round={true}
        color='#619ad1' size='30' textSizeRatio={1.5} />;
    } else {
      avatar = <Avatar className='avatar' name={answererName} round={true}
        size='30' textSizeRatio={1.5} />;
    }

    return (
      <div key={ idx } className='question-answer-item'>
        { avatar }

        <a className='answerer-name'>
          { answererName }
        </a> answered

        <div className='answer-item-body'>
          { answer.body }
        </div>
      </div>
    );
  });
};

export default Answer;
