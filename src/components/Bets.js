import React, { Component } from 'react';
import { Provider } from './Provider';
import NavBar from './layout/NavBar';
import Event from './Event';
import BetSlip from './BetSlip';

import data from './assets/data.json';
import './Bets.css';


export default class Bets extends Component {

	render() {
		
		const events = data.map((event) =>
			(event.markets.length>0) ? <Event key={event.id} event={event} /> : ''
		);

		return (
			<Provider>
				<div className="bets">
					<div className="inner">
						<NavBar />
						<BetSlip />
						{events}
					</div>
				</div>
			</Provider>
		);
	}
}