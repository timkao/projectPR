import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Assessment from './Assessment';
import Login from './Login';
import store, { fetchTeams } from '../store';
import styled from 'styled-components';

const MainWraaper = styled.div`
	margin: 1em 10%;
`;

export default class Main extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const teamsThunk = fetchTeams();
		store.dispatch(teamsThunk);
	}

	render (){
		return (
				<MainWraaper>
          <Route exact path='/' component={Login}></Route>
					<Route path='/home' render={() => <Assessment email="tim.kao@rea.com" />}></Route>
				</MainWraaper>
			)
	}
}
