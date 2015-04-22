'use strict';

//Ajax call to get JSON
$.ajax({
  url: 'mydata.json',
  dataType: 'json',
  async: false,
  success: function(data) {
    console.log('JSON successfully called!');
    window.myData = data;
  }
});

//Create empty array for usable data
var myData2 = [];

//Remove all players who played <1300 minutes
function parser(value, index, ar) {
	value.MP = parseInt(value.MP);
}
myData.forEach(parser);

function cleanData(value, index, ar) {
	if (value.MP > 1200) {
		myData2.push(myData[index]);
	}
}
myData.forEach(cleanData);

//Graph Player Efficiency Rating
var graphPER = function() {
	var graphPER_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphPER_arr.push(myData2[i]['PER']);
	}

	//Sorts PER's, returns Top 10
	window.graphPER_arr = graphPER_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphPER_arr.length-10);

	console.log(graphPER_arr);
}
graphPER();

//Graph True Shooting Percentage
var graphTS = function() {
	var graphTS_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphTS_arr.push(myData2[i]['TS%']);
	}

	//Sorts TS%'s, returns Top 10
	window.graphTS_arr = graphTS_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphTS_arr.length-10);

	console.log(graphTS_arr);
}
graphTS();

//Graph 3pt Attempt %
var graph3PAr = function() {
	var graph3PAr_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graph3PAr_arr.push(myData2[i]['3PAr']);
	}

	//Sorts 3PAr's, returns Top 10
	window.graph3PAr_arr = graph3PAr_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graph3PAr_arr.length-10);

	console.log(graph3PAr_arr);
}
graph3PAr();

//Graph Free Throw Rates
var graphFTr = function() {
	var graphFTr_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphFTr_arr.push(myData2[i]['FTr']);
	}

	//Sorts FTr's, returns Top 10
	window.graphFTr_arr = graphFTr_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphFTr_arr.length-10);

	console.log(graphFTr_arr);
}
graphFTr();

//Graph Offensive Win Shares
var graphOWS = function() {
	var graphOWS_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphOWS_arr.push(myData2[i]['OWS']);
	}

	//Sorts OWS's, returns Top 10
	window.graphOWS_arr = graphOWS_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphOWS_arr.length-10);

	console.log(graphOWS_arr);
}
graphOWS();

//Graph Defensive Win Shares
var graphDWS = function() {
	var graphDWS_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphDWS_arr.push(myData2[i]['DWS']);
	}

	//Sorts DWS's, returns Top 10
	window.graphDWS_arr = graphDWS_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphDWS_arr.length-10);

	console.log(graphDWS_arr);
}
graphDWS();

//Graph Total Win Shares
var graphWS = function() {
	var graphWS_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphWS_arr.push(myData2[i]['WS']);
	}

	//Sorts WS's, returns Top 10
	window.graphWS_arr = graphWS_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphWS_arr.length-10);

	console.log(graphWS_arr);
}
graphWS();

//Graph Box +/-
var graphBPM = function() {
	var graphBPM_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphBPM_arr.push(myData2[i]['BPM']);
	}

	//Sorts BPM's, returns Top 10
	window.graphBPM_arr = graphBPM_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphBPM_arr.length-10);

	console.log(graphBPM_arr);
}
graphBPM();

//Graph Value Over Replacement
var graphVORP = function() {
	var graphVORP_arr = [];
	for (var i = 0; i < myData2.length; i++) {
		graphVORP_arr.push(myData2[i]['VORP']);
	}

	//Sorts VORP's, returns Top 10
	window.graphVORP_arr = graphVORP_arr.sort(function(a,b) {
		return a - b;
	}).reverse().splice(10, graphVORP_arr.length-10);

	console.log(graphVORP_arr);
}
graphVORP();