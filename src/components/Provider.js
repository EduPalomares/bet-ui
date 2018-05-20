import React, { Component } from 'react';
import { serializeBets } from "../utils";
import data from './assets/data.json';

const Context  = React.createContext();

export class Provider extends Component {
  
	constructor(props) {
		super(props);

		this.addBet = this.addBet.bind(this);
		this.rmvBet = this.rmvBet.bind(this);
		this.openPanel = this.openPanel.bind(this);
		this.closePanel = this.closePanel.bind(this);
		
		this.state = {
			possibleBets: serializeBets(data),
			betsIds: [],
			panelIsOpen: false,
			rmvBet: this.rmvBet,
			addBet: this.addBet,
			openPanel: this.openPanel,
			closePanel: this.closePanel
		};
	}
	
	openPanel() {
		this.setState({panelIsOpen: true});
	}

	closePanel() {
		this.setState({panelIsOpen: false});
	}
	
	addBet(betId) {
		let betsIds = this.state.betsIds;

		if (betsIds.indexOf(betId)<0) {
			betsIds.push(betId);
		}

		this.openPanel();
	}
	
	rmvBet(id) {
		let betsIds = this.state.betsIds;
		let bid = betsIds.indexOf(id);

		if (bid >= 0) {
			this.setState({bets: betsIds.splice(bid,1)});
		}
	};
		
	
	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export class Consumer extends Component {
	render() {
		return (
			<Context.Consumer>
				{this.props.children}
			</Context.Consumer>
		);
	}
}