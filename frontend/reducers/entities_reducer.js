import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import topicsReducer from './topics_reducer';
import answersReducer from './answers_reducer';

const entitiesReducer = combineReducers ({
  users: usersReducer,
  questions: questionsReducer,
  topics: topicsReducer,
  answers: answersReducer,
});

export default entitiesReducer;
