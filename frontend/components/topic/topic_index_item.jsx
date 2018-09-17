import React from 'react';

const TopicIndexItem = props => {
  return (
    <div className='topic-item'>
      <div className='topic-item-link'>{ props.topic.name }</div>
    </div>
  );
};

export default TopicIndexItem;
