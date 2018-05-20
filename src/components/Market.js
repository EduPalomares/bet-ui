import React, { Component } from 'react';
import Selection from './Selection';
import './Market.css';

export default class Market extends Component {
	render() {

		const selections = this.props.selections.map((selection) =>
			{
				return <Selection key={selection.id} selection={selection} />
			}
		);

		return (
			<div className="market">
				<div className="objective">{this.props.marketname}</div>
				{selections}
			</div>
		);
	}
}