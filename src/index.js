import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux'
import App from './containers/App'
import routes from './routes';
import { createStore } from 'redux'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>,
	document.getElementById('root')
	);