import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';

configure({ adapter: new Adapter() });

describe('App', () => {
	let component;
	beforeEach(() => {
		component = mount(<App />);
	});
	it('renders something', () => {
		expect(component).to.exist;
	});
});
