import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	comments: (state = []) => state,
	router: routerReducer
});

export default rootReducer;
