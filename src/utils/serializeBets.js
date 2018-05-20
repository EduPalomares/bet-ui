/*
	Serialize data eliminating hierarchy
	
	Input:
		[
			{
				"id": string,
				"name": string,
				"markets": [
					{
						"id": string,
						"name": string,
						"selections": [
							{
								"id": string,
								"name": string,
								"price": number
							}
						]
					}
			}
		]
	
	Output:
		[
			selectionId:
			{
				eventId: string, 
				eventName: string, 
				marketId: string, 
				marketName: string, 
				selectionName: string,
				selectionPrice: number
			}
		]

*/

export default function serializeBets(data) {
	let d = [];

	data.map(
		(event) => {
			let eventId = event.id;
			let eventName = event.name;
			event.markets.map(
				(market) => {
					let marketId = market.id;
					let marketName = market.name;
					market.selections.map(
						(selection) => {
							d[selection.id] = {
								eventId: eventId,
								eventName: eventName,
								marketId: marketId,
								marketName: marketName,
								selectionName: selection.name,
								selectionPrice: selection.price
							};
							return null;
						}
					);
					return null;					
				}
			);
			return null;
		}
	); 

	return d;
}

