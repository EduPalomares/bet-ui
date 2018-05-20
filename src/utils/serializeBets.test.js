import React from 'react';
import serializeBets from './serializeBets';
import data from '../components/assets/data.json';

let result = [];

result['SEL_1'] = {eventId:"EVT_1",eventName:"Real Madrid vs Barcelona",marketId:"MKT_1",marketName:"Team to Win",selectionName:"Real Madrid",selectionPrice:1.23};
result['SEL_2'] = {eventId:"EVT_1",eventName:"Real Madrid vs Barcelona",marketId:"MKT_1",marketName:"Team to Win",selectionName:"Barcelona",selectionPrice:2.05};
result['SEL_3'] = {eventId:"EVT_1",eventName:"Real Madrid vs Barcelona",marketId:"MKT_2",marketName:"Player to Score First",selectionName:"Ronaldo",selectionPrice:1.15};
result['SEL_4'] = {eventId:"EVT_1",eventName:"Real Madrid vs Barcelona",marketId:"MKT_2",marketName:"Player to Score First",selectionName:"Messi",selectionPrice:1.3};
result['SEL_5'] = {eventId:"EVT_1",eventName:"Real Madrid vs Barcelona",marketId:"MKT_2",marketName:"Player to Score First",selectionName:"Bale",selectionPrice:1.35};
result['SEL_6'] = {eventId:"EVT_2",eventName:"Atletico Madrid vs Malaga",marketId:"MKT_3",marketName:"Team to Win",selectionName:"Atletico",selectionPrice:1.4};
result['SEL_7'] = {eventId:"EVT_2",eventName:"Atletico Madrid vs Malaga",marketId:"MKT_3",marketName:"Team to Win",selectionName:"Malaga",selectionPrice:3.05};


it('serializeBets:: ', () => {
	expect(serializeBets(data)).toEqual(result);
});