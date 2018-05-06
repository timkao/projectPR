import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Assessment from './Assessment';
import Login from './Login';
import store, { fetchTeams } from '../store';


export default class Main extends Component {

	componentDidMount() {
		const teamsThunk = fetchTeams();
		store.dispatch(teamsThunk);
	}

	render (){
		return (
				<div className='container'>
          <Route exact path='/' component={Login}></Route>
					<Route path='/home' component={Assessment}></Route>
				</div>
			)
	}
}
