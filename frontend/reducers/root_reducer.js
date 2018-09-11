import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
});

export default rootReducer;
