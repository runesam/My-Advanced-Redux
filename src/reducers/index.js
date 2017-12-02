import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import CommentsReducer from './commentsReducer';

const rootReducer = combineReducers({
	comments: CommentsReducer,
	router: routerReducer
});

export default rootReducer;
