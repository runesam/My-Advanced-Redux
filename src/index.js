import React from 'react';
import fireBase from 'firebase';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'toastr/build/toastr.min.css';

import StoreConfigure from './store/storeConfig';
import generalUtils from './utils/generalUtils';

import './index.css';
import App from './components/app';

const history = createHistory();

const Store = StoreConfigure();
generalUtils.initializeFireBaseApp(fireBase);

render(
	<Provider store={Store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
