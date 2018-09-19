import React from 'react';
import { Link } from 'react-router-dom';

const TopicIndexItem = props => {
  return (
    <div className='topic-item-link'>
      <Link to={`/topics/${props.topic.id}`} className='link-item'>
        { props.topic.name }
      </Link>
    </div>
  );
};

export default TopicIndexItem;
