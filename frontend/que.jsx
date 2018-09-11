import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// for testing only start
import { login, logout } from './actions/session_actions';
// for testing only end

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.store = store;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<Root store={ store }/>, root);
});
