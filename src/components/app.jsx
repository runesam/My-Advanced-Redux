import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
	Header,
	NoMatch
} from './common';

import Home from './home/home';

const App = () => (
	<div className='container'>
		<Router>
			<div className='col-xs-12'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='*' component={NoMatch} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default App;
