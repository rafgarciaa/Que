import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session/session_form';
import Homepage from './homepage';
import NavbarContainer from './navbar/navbar_container';
import QuestionViewContainer from './question/question_view_container';
import TopicViewContainer from './topic/topic_view_container';

const App = () => (
  <div>
    <AuthRoute path="/session" component={SessionForm} />
    <ProtectedRoute path='/' component={NavbarContainer} />

    <Switch>
      <ProtectedRoute path='/answer' component={NavbarContainer} />
      <ProtectedRoute path='/questions/:questionId'
        component={QuestionViewContainer} />
      <ProtectedRoute path='/topics/:topicId' component={TopicViewContainer} />
      <ProtectedRoute exact path='/index' component={Homepage} />
    </Switch>
  </div>
);

export default App;
