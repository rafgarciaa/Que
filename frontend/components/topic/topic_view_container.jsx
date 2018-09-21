import { connect } from 'react-redux';
import { fetchTopic } from '../../actions/topic_actions';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import TopicView from './topic_view';
import { selectAllQuestions, selectAllAnswers } from '../../reducers/selectors';
import { fetchAnswers } from '../../actions/answer_actions';

const msp = (state, ownProps) => {
  return {
    questions: selectAllQuestions(state),
    answers: selectAllAnswers(state),
    users: state.entities.users,
    topic: state.entities.topics[ownProps.match.params.topicId],
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    fetchTopic: id => dispatch(fetchTopic(id)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
    fetchAnswers: () => dispatch(fetchAnswers()),
  };
};

export default connect(msp, mdp)(TopicView);
