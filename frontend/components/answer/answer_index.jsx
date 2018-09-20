import React from 'react';
import AnswerIndexItem from './answer_index_item';

export default class AnswerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestionItem = this.deleteQuestionItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  filterQuestions() {
    return this.props.questions.reverse().filter( question =>
      question.answerIds.length === 0
    );
  }

  deleteQuestionItem(questionId, authorId) {
    if (this.props.currentUser.id === authorId) {
      this.props.deleteQuestion(questionId);
    } else {
      return alert("You can't delete a question you did not ask!");
    }
  }

  render() {
    if (this.props.questions.length > 0) {
      const questions = this.filterQuestions();

      return (
        <ul className='answer-index-container'>
          <div className='answer-header-container'>
            <i className="far fa-star"></i>
            Questions for You
          </div>

          {
            questions.map( (question, idx) => {
              return <AnswerIndexItem
                key={ idx }
                question={ question }
                topics={ this.props.topics }
                currentUser={ this.props.currentUser }
                deleteQuestion={ this.deleteQuestionItem }
                />;
            })
          }

        </ul>
      );
    } else {
      return null;
    }
  }
}
