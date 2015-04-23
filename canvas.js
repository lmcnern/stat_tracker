'use strict'

function jsFunction(value) {
  var barData = {
    labels: myLabel(sorter(value)),
    datasets: [
      {
        fillColor: "#AD5CFF",
        strokeColor: "#290052",
        data: myData(sorter(value))
      },
    ]
  }

  var playerChart = document.getElementById("playerChart").getContext("2d");
  new Chart(playerChart).Bar(barData);
}
