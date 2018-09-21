import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';

class AnswerEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '', theme: 'snow' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modules = {
      toolbar: [
        ['bold', 'italic', {'list': 'ordered'}, {'list': 'bullet'}]
      ]
    };

    this.formats = ['bold', 'italic'];
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleSubmit(e) {
    e.preventDefault();
    const answer = {
      body: this.state.editorHtml.replace(/<\/?[^>]+(>|$)/g, ""),
      question_id: this.props.question.id,
      user_id: this.props.currentUser.id
    };

    this.props.toggleEditor();
    this.props.createAnswer(answer);
  }

  render() {
    const currentUserName = this.props.currentUser.first_name + ' ' +
    this.props.currentUser.last_name;

    return (
      <div className='answer-editor-container'>

        <div className='answer-editor-header'>
          { currentUserName }
        </div>
        <div className='answer-editor'>
          <ReactQuill
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={this.modules}
            formats={this.formats}
            placeholder="Write your answer"
           />
        </div>
        <div className='answer-editor-footer'>
          <button className='answer-button'
            onClick={ this.handleSubmit }>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    createAnswer: answer => dispatch(createAnswer(answer)),
  };
};

export default connect(msp, mdp)(AnswerEditor);
