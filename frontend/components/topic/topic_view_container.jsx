import { connect } from 'react-redux';
import { fetchTopic } from '../../actions/topic_actions';
import { fetchQuestions } from '../../actions/question_actions';
import TopicView from './topic_view';

const msp = (state, ownProps) => {
  return {
    topic: state.entities.topics[ownProps.match.params.topicId],
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    fetchTopic: id => dispatch(fetchTopic(id)),
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
};

export default connect(msp, mdp)(TopicView);
