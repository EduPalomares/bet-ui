import React, { Component } from 'react';
import { Consumer } from './Provider';
import Bet from './Bet';
import './BetSlip.css';

export default class BetSlip extends Component {
	render() {
		return (
			<Consumer>
				{
					context => {
					
						const userBets = context.betsIds.map(function(betId, index) {
								const bet = context.possibleBets[betId];
								const betMarketNameShort = (bet.marketName==='Team to Win') ? ' to Win' : ' to Score';
								return <Bet key={index} id={betId} betName={bet.selectionName+betMarketNameShort} betPrice={bet.selectionPrice} />
							}
						);
		
						return (
							<div className={(!context.panelIsOpen) ? "betslip collapsed" : "betslip"} >
								<div className="betslip-panel">
									<div className="bp-bg"></div>
									<div className="bp-inner">
										<div className="close" onClick={context.closePanel}></div>
										{userBets}
									</div>
								</div>
							</div>
						);
					}	
				}
			</Consumer>
		);
	}
}