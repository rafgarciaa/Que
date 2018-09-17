import React from 'react';
import { Link } from 'react-router-dom';

const TopicIndexItem = props => {
  return (
    <div>
      <div className='topic-item-link'>
        <Link to={`/topics/${props.topic.id}`}>{ props.topic.name }</Link>
      </div>
    </div>
  );
};

export default TopicIndexItem;
