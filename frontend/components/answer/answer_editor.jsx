import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';

class AnswerEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.answer;
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modules = {
      toolbar: [
        ['bold', 'italic', {'list': 'ordered'}, {'list': 'bullet'}]
      ]
    };
    this.formats = ['bold', 'italic'];
  }

  updateBody(value) {
    this.setState({ body: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.toggleEditor();
    this.props.createAnswer(this.state);
    this.setState({ body: '' });
  }

  render() {
    const currentUserName = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name;

    return (
      <div className={`answer-editor-container answer-editor-container-${this.props.question.id}`}>

        <div className='answer-editor-header'>
          { currentUserName }
        </div>
        <div className='answer-editor'>
          <ReactQuill theme={'snow'} onChange={this.updateBody.bind(this)} value={this.state.body} modules={this.modules} formats={this.formats} placeholder="Write your answer"/>
        </div>
        <div className='answer-editor-footer'>
          <button className='answer-button' onClick={ this.handleSubmit }> Submit </button>
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    answer: {
      body: '',
      question_id: ownProps.question.id,
      user_id: state.session.id
    },
  };
};

const mdp = dispatch => {
  return {
    createAnswer: answer => dispatch(createAnswer(answer)),
  };
};

export default connect(msp, mdp)(AnswerEditor);
