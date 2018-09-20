import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import TopicIndexContainer from './topic/topic_index_container';
import AnswerIndexContainer from './answer/answer_index_container';
import SitesIndex from './site/sites_index';

const Answerpage = () => {
  return (
    <div className='answerpage-items-container'>
      <NavbarContainer />
      <TopicIndexContainer />
      <AnswerIndexContainer />
      <SitesIndex />
    </div>
  );
};

export default Answerpage;
