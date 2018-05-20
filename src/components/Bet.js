import React, { Component } from 'react';
import { Consumer } from './Provider';
import './Bet.css';

export default class Bet extends Component {
	render() {
		return (
			<Consumer>
				{ 
					context => 
						<div id={this.props.id} className="bet">
							<div className="bet-name">{this.props.betName}</div>
							<div className="bet-price">{this.props.betPrice}</div>
							<button key={this.props.id} onClick={()=> {context.rmvBet(this.props.id);}}>Delete</button>
						</div>
				}
			</Consumer>
		);
	}
}

