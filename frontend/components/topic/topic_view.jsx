import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import QuestionIndexItem from '../question/question_index_item';
import TopicIndexContainer from './topic_index_container';
import SitesIndex from '../site/sites_index';

export default class TopicView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null
    };
  }

  componentDidMount() {
    this.props.fetchTopic(this.props.match.params.topicId);
    this.props.fetchQuestions();
  }

  render() {
    const topic = this.props.topic || {name: ''};
    const topicId = this.props.match.params.topicId;

    let topicQuestions;
    if (this.props.questions.length > 0) {
      topicQuestions = this.props.questions.reverse().map( (question, idx) => {
        if (question.topic_id === parseInt(topicId)) {
          return <QuestionIndexItem
            key={ idx }
            question={ question }
            users={ this.props.users }
            topic={ this.props.topic }
            answers={ this.props.answers }
            currentUser={ this.props.currentUser }
            deleteQuestion={ this.props.deleteQuestion }
            />;
        }
      });
    } else {
      topicQuestions = null;
    }

    return (
      <div className='homepage-items-container'>
        <TopicIndexContainer />

        <div className='topic-view-container'>
          <div className='topic-view-header'>
            <Link to={`#/topics/${topicId}`}>
              <span className='topic-name'>{ topic.name }</span>
            </Link>

            <div className='topic-view-footer'>
              <span><NavLink to={`#/topics/${topicId}`}
                activeClassName='active-nav'>Read</NavLink>
              </span>
              <span><NavLink to={`#/topics/${topicId}`}
                activeClassName='active-nav'>Answer</NavLink>
              </span>
            </div>
          </div>

          <div className='question-index-container'>
            { topicQuestions }
          </div>
        </div>

        <SitesIndex />
      </div>
    );
  }
}
