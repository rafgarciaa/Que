import React from 'react';
import TopicIndexItem from './topic_index_item';

export default class TopicIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      <ul className='topic-index-container'>
      <div className='topic-index-header'>Feeds</div>
        <div className='topic-item-link-top-stories'>Top Stories</div>
        {
          this.props.topics.map( (topic, idx) => {
            return <TopicIndexItem key={ idx }
              topic={ topic } />;
          })
        }
      </ul>
    );
  }
}
