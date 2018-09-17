import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session/session_form';
import Homepage from './homepage';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <AuthRoute path="/" component={SessionForm} />

    <Switch>
      <ProtectedRoute path='/answer' component={NavbarContainer} />
      <ProtectedRoute exact path='/index' component={Homepage} />
    </Switch>
  </div>
);

export default App;
