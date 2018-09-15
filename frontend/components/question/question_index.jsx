import React from 'react';
import QuestionIndexItem from './question_index_item';

export default class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <ul className='question-index-container'>
        {
          this.props.questions.map( (question, idx) => {
            return <QuestionIndexItem
              key={ idx }
              question={ question }
              />;
          })
        }
      </ul>
    );
  }
}
