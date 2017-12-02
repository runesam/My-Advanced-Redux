import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CommentBox from './commentBox';
import Comments from './comments';

configure({ adapter: new Adapter() });

describe('Comment Box', () => {
	let component;
	beforeEach(() => {
		component = mount(<CommentBox />);
	});
	it('has the correct class name', () => {
		const wrapper = component.find('div').first();
		expect(wrapper.hasClass('comment-box')).to.be.true;
	});
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});
	it('has a submit button', () => {
		expect(component.find('button')).to.exist;
	});
	describe('entering some text', () => {
		it('shows text that is entered', () => {

		});
		it('clears the input when submitted', () => {

		});
	});
});

describe('Comments', () => {
	let component;
	beforeEach(() => {
		component = mount(<Comments />);
	});
	it('show a comment box', () => {
		expect(component.find('.comment-box').exists()).to.be.true;
	});
});