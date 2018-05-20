import React from 'react';
import Selection from './Selection';

const props = {
	selection: {"id": "SEL_1", "name": "Real Madrid", "price": 1.23},
	betsIds: [],
	context: {
		betsIds: []
	}
};

const ConsumerSelection = shallow(<Selection {...props} />).props().children;
const wrapper = shallow(<ConsumerSelection {...props} />);

test('render match snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

test('contains name & price', () => {
	expect(wrapper.find('.name').length).toBe(1);
	expect(wrapper.find('.price').length).toBe(1);
});