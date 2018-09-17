import React from 'react';

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  // componentWillReceiveProps(nextProps) {
  //
  // }

  render() {
    const question = this.props.question || {body: ''};
    return (
      <div className='question-item-container'>
        <span className='question-delete-button'>&times;</span>
        <div className='question-item-body'>
          { question.body }
        </div>
      </div>
    );
  }
}
