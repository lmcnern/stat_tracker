'use strict'

function jsFunction(value) {
  var barData = {
    labels: myLabel(sorter(value)),
    datasets: [
      {
        fillColor: "#66E0FF",
        strokeColor: "#008FB2",
        data: myData(sorter(value))
      },
    ]
  }

  var playerChart = document.getElementById("playerChart").getContext("2d");
  new Chart(playerChart).Bar(barData);
}
