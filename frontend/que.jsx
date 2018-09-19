import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// for testing only start
import { login, logout } from './actions/session_actions';
import { fetchQuestions,
  fetchQuestion,
  createQuestion,
  deleteQuestion
} from './actions/question_actions';

import { fetchAnswers } from './actions/answer_actions';

import { selectAllQuestions } from './reducers/selectors';
// for testing only end

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

// for testing only start
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.fetchQuestions = fetchQuestions;
  window.fetchQuestion = fetchQuestion;
  window.createQuestion = createQuestion;
  window.deleteQuestion = deleteQuestion;
  window.selectAllQuestions = selectAllQuestions;
  window.fetchAnswers = fetchAnswers;
// for testing only end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
