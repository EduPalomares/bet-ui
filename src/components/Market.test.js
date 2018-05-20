import React from 'react';
import Market from './Market';

const props = {
	selections: []
}

const wrapper = shallow(<Market {...props} />);

test('render match snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

test('render objective', () => {
	expect(wrapper.find('.objective').length).toBe(1);
});

