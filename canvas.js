'use strict'

// var e = document.getElementById('selectMenu');
// var strUser = e.options[e.selectedIndex].value;

// console.log(strUser);

var StatData = function(label, data) {
  this.label = label;
  this.data = data;
}

var FTr = new StatData(FTr, FTr);


var barData = {
  labels: myLabel(sorter(FTr.label)),
  datasets: [
    {
      fillColor: "#66FF66",
      strokeColor: "#006600",
      data: myData(sorter(FTr.data))
    },
  ]
}

var playerChart = document.getElementById("playerChart").getContext("2d");
new Chart(playerChart).Bar(barData);
