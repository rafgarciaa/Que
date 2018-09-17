import React from 'react';

export default class TopicView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopic(this.props.match.params.topicId);
  }

  render() {
    const topic = this.props.topic || {name: ''};
    return (
      <div className='topic-view-container'>
        <div className='topic-view-header'>
          { topic.name }
          <div className='topic-view-footer'>
            footer here
          </div>
        </div>
      </div>
    );
  }
}
