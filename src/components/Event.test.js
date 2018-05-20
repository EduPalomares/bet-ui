import React from 'react';
import Event from './Event';

const props = {
	event: {markets: []}
}

const wrapper = shallow(<Event {...props} />);


test('render match snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

test('render contenders', () => {
	expect(wrapper.find('.contenders').length).toBe(1);
});

