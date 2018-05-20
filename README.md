# bet-ui

## Introduction

Implementation of mobile betting interface model using React.js.

<br>

## Technology

* Npm		6.0.1
* Node.js 	9.11.1 
* React.js 	16.3.2
* Enzyme 	3.3.0

<br>

## Implementation Details

Boilerplate used [Create React App](https://github.com/facebookincubator/create-react-app).

The implementation has tried to use the latest syntax rules of ECMAScript 6
and React 16.30. In particular:

* Arrow Functions
* Clases
* Let and Const
* Context API

Tests using Jest and Enzyme.

<br>

## Components hierarchy

		      Bets
		┏━━━━━━━┻━━━━━━━┓
	      Event	     BetSlip
		┃		┃
	      Market	       Bet
		┃		  
	     Selection	       
<br>	  

## Data

The application receives the data following the types:

```js
/** The response type of the API call */
type ResponseType = EventsType[];

/** Event Entity */
type EventType = {
	id: string,
	name: string,
	markets: MarketType[],
};

/** Market Entity */
type MarketType = {
	id: string,
	name: string,
	markets: SelectionType[],
}

/** Selection Entity */
type SelectionType = {
	id: string,
	name: string,
	price: number,
}
```

Was considered a different internal structure for data resulting in the scheme:

```js

Selections =

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

```


<br>


## Usage	  

```
Install: npm install
Run: npm start (usually http://localhost:3000)
Test: npm test
```
<br>
	  
## Result

https://edupalomares.github.io/bet-ui
