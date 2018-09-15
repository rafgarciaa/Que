import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import SessionForm from './session/session_form';
import QuestionModal from './question/question_modal';
import QuestionIndexContainer from './question/question_index_container';

const App = () => (
  <div className='homepage-items-container'>
    <header>
      <AuthRoute path="/" component={SessionForm} />
      <NavbarContainer />
    </header>

    <div>
      <QuestionModal />
      <QuestionIndexContainer />
    </div>
  </div>
);

export default App;
