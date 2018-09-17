import React from 'react';
import QuestionModal from './question_modal';
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
        <QuestionModal currentUser={ this.props.currentUser } />
        {
          this.props.questions.reverse().map( (question, idx) => {
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
