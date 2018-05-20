import React, { Component } from 'react';
import { Consumer } from '../Provider';
import './NavBar.css';

export default class NavBar extends Component {
	render() {
		return (
			<Consumer>
				{ 
					context => 
						<div className="navbar">
							<div className="navbar-icon" onClick={context.openPanel}>
								<div className="bar1"></div>
								<div className="bar2"></div>
								<div className="bar3"></div>
							</div>
						</div>
				}
			</Consumer>
		);
	}
}