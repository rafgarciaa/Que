import React from 'react';
import { Link } from 'react-router-dom';
import AnswerEditor from './answer_editor';

export default class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openAnswerEditor: 0 };
  }

  toggleEditor(id) {
    return () => {
      
      if (id === this.state.openAnswerEditor) {
        $(`.answer-editor-container-${id}`).removeClass('answer-editor-show');
        this.setState({ openAnswerEditor: 0 });
      } else {
        // $(`.answer-editor-container-${this.state.openAnswerEditor}`).removeClass('answer-editor-show');
        $('.answer-editor-container').removeClass('answer-editor-show');
        $(`.answer-editor-container-${id}`).addClass('answer-editor-show');
        this.setState({ openAnswerEditor: id });
      }
    };
  }

  render() {
    let topicName = this.props.topics[this.props.question.topic_id].name;
    let deleteButton;
    if (this.props.currentUser.id === this.props.question.author_id) {
      deleteButton = <span onClick={
          () => this.props.deleteQuestion(
            this.props.question.id,
            this.props.question.author_id
          )
        }
        className='delete-button'>&times;</span>;
    } else {
      deleteButton = null;
    }

    return (
      <div className='answer-item-box'>
        { deleteButton }
        <div className='answer-item-header'>
          Question asked · <Link to={`/topics/${this.props.question.topic_id}`}
          className='answer-topic-link'>{ topicName }</Link>
        </div><br/>

        <Link className='answer-item-body'
          to={`/questions/${this.props.question.id}`}>
          { this.props.question.body }
        </Link>

        <div className='comments'>No answers yet</div>

        <div className='answer-button' onClick={ this.toggleEditor(this.props.question.id) }>
          <i className="far fa-edit"></i>
          Answer
        </div>

        <AnswerEditor
          question={ this.props.question }
          currentUser={ this.props.currentUser }
          toggleEditor={ this.toggleEditor(this.props.question.id) }/>

      </div>
    );
  }
}
