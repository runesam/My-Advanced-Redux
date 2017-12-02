import {
	SAVE_COMMENT
} from '../actions/types';

function commentsReducer(state = [], action) {
	if (action) {
		switch (action.type) {
			case SAVE_COMMENT:
				return [...state, action.payload];
			default: return state;
		}
	}
	return state;
}

export default commentsReducer;
