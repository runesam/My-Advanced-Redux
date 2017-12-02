import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Comments from './comments';
import CommentBox from './commentBox';
import { CommentsList } from './commentsList';

configure({ adapter: new Adapter() });

// describe('Comments', () => {
// 	let component;
// 	beforeEach(() => {
// 		component = mount(<Comments />);
// 	});
// 	it('show a comment box', () => {
// 		expect(component.find('.comment-box').exists()).to.be.true;
// 	});
// 	it('show a comments list', () => {
// 		expect(component.find('.comments-list').exists()).to.be.true;
// 	});
// });

describe('Comment Box', () => {
	let component;
	beforeEach(() => {
		component = mount(<CommentBox />);
	});
	it('has the correct class name', () => {
		const wrapper = component.find('form').first();
		expect(wrapper.hasClass('comment-box')).to.be.true;
	});
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});
	it('has a submit button', () => {
		expect(component.find('button')).to.exist;
	});
	describe('entering some text', () => {
		beforeEach(() => {
			component.find('textarea').simulate('change', { target: { value: 'new Comment' } });
		});
		it('shows text that is entered', () => {
			const textAreaValue = component.find('textarea').props().value;
			expect(textAreaValue).to.equal('new Comment');
		});
		it('clears the input when submitted', () => {
			component.find('form').simulate('submit');
			const textAreaValue = component.find('textarea').props().value;
			expect(textAreaValue).to.equal('');
		});
	});
});

describe('Comments List', () => {
	let component;
	const comments = [
		'new comment',
		'other new comment'
	];
	beforeEach(() => {
		component = mount(<CommentsList comments={comments} />);
	});
	it('shows a LI for each comment', () => {
		expect(component.find('li').length).to.equal(comments.length);
	});
	it('shows each comment that is being provided', () => {
		component.find('li').forEach((li, key) => {
			expect(li.text()).to.equal(comments[key]);
		});
	});
});