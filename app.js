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


var myData2 = [];

//Remove all players who played <1300 minutes
function parser(value, index, ar) {
	value.MP = parseInt(value.MP);
	value.PER = parseFloat(value.PER);
}
myData.forEach(parser);

function cleanData(value, index, ar) {
	if (value.MP > 1300) {
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
	}).reverse().splice(11, graphPER_arr.length-10);

	console.log(graphPER_arr);
}

graphPER();












