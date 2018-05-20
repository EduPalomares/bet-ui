import React, { Component } from 'react';
import { Consumer } from './Provider';

export default class Selection extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			isSelected: false,
		};

		this.betId = this.props.selection.id;
		this.handleStatusBet = this.handleStatusBet.bind(this);
		this.thisSelect = this.thisSelect.bind(this);

	}
  
	thisSelect() {
		this.setState((prevState, props) => ({
			isSelected: true
		}));
	}
	
	handleStatusBet(betsIds) {
		let selected = (betsIds.indexOf(this.props.selection.id)>=0) ? true : false;
		if (this.state.isSelected!==selected) {
			this.setState((prevState, props) => ({
				isSelected: selected
			}));
		}
	}
	
	render() {

		return (
			<Consumer>
				{
					context => {
					
						this.handleStatusBet(context.betsIds);
						
						return (
							<div className={(this.state.isSelected) ? "selection selected" : "selection"} onClick={	() => { this.thisSelect(); context.addBet(this.betId) }}>
								<div className="name">{this.props.selection.name}</div>
								<div className="price">{this.props.selection.price}</div>
							</div>
						)
					}
				}
			</Consumer>
		);
		
	}
}



