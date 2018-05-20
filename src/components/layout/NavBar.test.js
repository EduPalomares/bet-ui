import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

test('render match snapshot', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
});