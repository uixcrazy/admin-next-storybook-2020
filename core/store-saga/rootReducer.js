import { combineReducers } from 'redux';
import sampleSagaReducer from 'app/sample-saga/reducers';
import typicodeUsersReducer from 'app/users/store/reducer';
// import todos from './todos'
// import counter from './counter'

export default combineReducers({
  sampleSagaReducer,
  typicodeUsersReducer
  // todos,
  // counter
});
