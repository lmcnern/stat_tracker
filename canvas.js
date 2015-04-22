'use strict'

var e = document.getElementById('selectMenu');
var strUser = e.options[e.selectedIndex].value;



console.log(strUser);

var barData = {
  labels : ["Steph Curry","Lebron James","Lance Stephenson","Javale McGee","Russell Westbrook","Demarcus Cousins"],
  datasets : [
    {
      fillColor : "#66FF66",
      strokeColor : "#006600",
      data : [456,479,324,569,702,600]
    },
    // {
    //   fillColor : "rgba(73,188,170,0.4)",
    //   strokeColor : "rgba(72,174,209,0.4)",
    //   data : [364,504,605,400,345,320]
    // }

  ]
}

var playerChart = document.getElementById("playerChart").getContext("2d");
new Chart(playerChart).Bar(barData);
