'use strict'

function jsFunction(value) {
  machine(value);
}

function machine(input) {
  var barData = {
    labels: myLabel(sorter(input)),
    datasets: [
      {
        fillColor: "#66FF66",
        strokeColor: "#006600",
        data: myData(sorter(input))
      },
    ]
  }

  var playerChart = document.getElementById("playerChart").getContext("2d");
  var myNewChart = new Chart(playerChart).Bar(barData);
}
