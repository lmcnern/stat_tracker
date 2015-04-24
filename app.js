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

// Sorting Function
var compFunc = function(a, b) {
  var len = a.length > b.length ? b.length : a.length;
  for(var i=0; i<len; ++i) {
    if(a[i] - b[i] !== 0) {
      return a[i] - b[i];
    }
  }
  return 0;
}

// Makes a top 10 array with [data, player]
var sorter = function(statCategory) {
  var sorter_arr = [];
  var totalData = 0;
  for (var i = 0; i < myData2.length; i++) {
    var sorter_tempArr = [];
    var hi = parseFloat(myData2[i][statCategory]);
    sorter_tempArr.push(hi);
    totalData += hi;
    sorter_tempArr.push(myData2[i]['Player']);
    sorter_arr.push(sorter_tempArr);
  }

  var sorter_arr10 = sorter_arr.sort(compFunc).reverse().splice(0, 9);
  
  // Calculate & Push League Average
  sorter_arr10.push([(totalData / myData2.length).toPrecision(3), 'Average']);

  return sorter_arr10;
}

// Returns array of top 10 Players
var myLabel = function(statCategory) {
  var playerNames = [];
  for (var i = 0; i < statCategory.length; i++) {
    playerNames.push(statCategory[i][1]);
  }
  //playerNames.push('Mean');
  return playerNames;
}

// Returns array of top 10 Stats
var myData = function(statCategory) {
  var playerData = [];
  for (var i = 0; i < statCategory.length; i++) {
    playerData.push(statCategory[i][0]);
  }
  //playerData.push(statMean(statCategory));
  return playerData;
}
