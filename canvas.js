'use strict'

function jsFunction(value) {
  machine(value);
}

function machine(input) {
  var barData = {
    labels: myLabel(sorter(input)),
    datasets: [
      {
        fillColor: "#AD5CFF",
        strokeColor: "#290052",
        data: myData(sorter(input))
      },
    ]
  }

  var playerChart = document.getElementById("playerChart").getContext("2d");
  new Chart(playerChart).Bar(barData);
}
