import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session/session_form';
import Homepage from './homepage';


const App = () => (
  <div>
    <AuthRoute path="/" component={SessionForm} />

    <Switch>
      <ProtectedRoute exact path='/index' component={Homepage} />
    </Switch>
  </div>
);

export default App;
