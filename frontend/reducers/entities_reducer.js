import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import topicsReducer from './topics_reducer';

const entitiesReducer = combineReducers ({
  users: usersReducer,
  questions: questionsReducer,
  topics: topicsReducer,
});

export default entitiesReducer;
