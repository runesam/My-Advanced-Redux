import { expect } from 'chai';

import commentReducer from './commentsReducer';
import {
	SAVE_COMMENT
} from './../actions/types';

describe('Reducers', () => {
	describe('Comments Reducers', () => {
		it('handles action with unknown type', () => {
			expect(commentReducer()).to.be.instanceOf(Array);
		});
		it('handles action of type SAVE_COMMENT', () => {
			const state = [
				'very old comment',
				'old comment',
				'comment'
			];
			const action = {
				type: SAVE_COMMENT,
				payload: 'new Comment'
			};
			const commentReducerReturn = commentReducer(state, action);
			expect(commentReducerReturn.length).to.equal(state.length + 1);
			expect(commentReducerReturn[commentReducerReturn.length - 1]).to.equal(action.payload);
		});
	});
});
