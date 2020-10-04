import React from 'react';
import Landing from './components/layout/Landing';
import Footer from './components/layout/FooterPA';
import './App.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

	return (
		<Router>
			<Switch>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
