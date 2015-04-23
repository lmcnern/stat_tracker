'use strict'

function jsFunction(value) {
    if (value === 'PER') {
      machine('PER');
    } else if (value === 'TSP') {
      machine('TSP');
    } else if (value === '3PA') {
      machine('3PA');
    } else if (value === 'FTAR') {
      machine('FTAR');
    } else if (value === 'OWS') {
      machine('OWS');
    } else if (value === 'DWS') {
      machine('DWS');
    } else if (value === 'TWS') {
      machine('TWS');
    } else if (value === 'BPM') {
      machine('BPM');
    } else if (value === 'VORP') {
      machine('VORP');
    }
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
  new Chart(playerChart).Bar(barData);
}
