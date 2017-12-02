import { expect } from 'chai';
import {
	SAVE_COMMENT
} from './types';
import { saveComment } from './';

describe('actions', () => {
	describe('saveComment', () => {
		it('has the correct Type', () => {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		});
		it('has the correct payload', () => {
			const action = saveComment('new comment');
			expect(action.payload).to.equal('new comment');
		});
	});
});