import React from 'react';
import Bets from './Bets';
import NavBar from './layout/NavBar';
import BetSlip from './BetSlip';

const wrapper = shallow(<Bets />);

test('render match snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

test('render structure right', () => {
	expect(wrapper.contains(<NavBar />)).toEqual(true);
	expect(wrapper.contains(<BetSlip />)).toEqual(true);
});
