import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import teams from './teams';

const reducer = combineReducers({
  teams: teams
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

export default store;
export * from './teams';
