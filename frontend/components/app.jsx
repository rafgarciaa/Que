import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import SessionForm from './session/session_form';

const App = () => (
  <div>
    <header>
      <AuthRoute path="/" component={SessionForm} />
      <NavbarContainer />
    </header>
  </div>
);

export default App;
