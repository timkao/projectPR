import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import teams from './teams';
import team from './selectedTeam';

const reducer = combineReducers({
  teams: teams,
  team: team
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

export default store;
export * from './teams';
export * from './selectedTeam';
