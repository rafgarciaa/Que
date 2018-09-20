import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import QuestionIndexContainer from './question/question_index_container';
import TopicIndexContainer from './topic/topic_index_container';
import SitesIndex from './site/sites_index';

const Homepage = () => {
  return (
    <div className='homepage-items-container'>
      <NavbarContainer />
      <TopicIndexContainer />
      <QuestionIndexContainer />
      <SitesIndex />
    </div>
  );
};

export default Homepage;
