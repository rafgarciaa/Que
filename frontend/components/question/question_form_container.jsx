import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';
import { fetchTopics } from '../../actions/topic_actions';
import QuestionForm from './question_form';
import { selectAllTopics } from '../../reducers/selectors';

const msp = state => {
  return {
    topics: selectAllTopics(state),
    currentUser: state.entities.users[state.session.id],
  };
};

const mdp = dispatch => {
  return {
    createQuestion: question => dispatch(createQuestion(question)),
    fetchTopics: () => dispatch(fetchTopics()),
  };
};

export default connect(msp, mdp)(QuestionForm);
