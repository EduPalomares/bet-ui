import React, { Component } from 'react';
import Market from './Market';
import './Event.css';

export default class Event extends Component {

	render() {

		const markets = this.props.event.markets.map((market) =>
			{
				return <Market key={market.id} selections={market.selections} />
			}			
		);

		return (
			<div className="event">
				<div className="contenders">{this.props.event.name}</div>
				{markets}
			</div>
		);
	}
}