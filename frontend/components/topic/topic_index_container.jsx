import { fetchTopics, fetchTopic } from '../../actions/topic_actions';
import { connect } from 'react-redux';
import { selectAllTopics } from '../../reducers/selectors';
import TopicIndex from './topic_index';

const msp = state => {
  return {
    topics: selectAllTopics(state)
  };
};

const mdp = dispatch => {
  return {
    fetchTopics: () => dispatch(fetchTopics()),
    fetchTopic: () => dispatch(fetchTopic())
  };
};

export default connect(msp, mdp)(TopicIndex);
