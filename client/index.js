import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Main />
		</Router>
	</Provider>,
	document.getElementById('root')
)
