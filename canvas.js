'use strict'



function machine(input) {
  if (input == 'PER') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">player efficiency rating</span> is the per minute production rating of a player.</p>';
  } else if (input === 'TS%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">true shooting percentage</span> is the measurement of a player\'s shooting efficency that takes into account all possible forms of scoring.</p>';
  } else if (input === '3PAr') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">three point attempt rate</span> is a measurement of attempts from three point range.</p>';
  } else if (input === 'FTr') {
    document.getElementById('dom').innerHTML = '<p class="desc"><span id="blue">Free throw attempt rate</span> is the number of free throw attempts per field goal attempts.</p>';
  } else if (input === 'ORB%') {
     document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">offensive rebound percentage</span> is an estimate of the percentage of available offensive rebounds a player grabbed.</p>';
  } else if (input === 'DRB%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">defensive rebound percentage</span> is an estimate of the percentage of available offensive rebounds a player grabbed.</p>';
  } else if (input === 'TRB%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">total rebound percentage</span> is an estimate of the percentage of toal available rebounds a player grabbed.</p>';
  } else if (input === 'AST%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">assist percentage</span> is an estimate of the times a player assisted a teammate\'s scoring play.</p>';
  } else if (input === 'STL%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">steal percentage</span> is an estimate of times the player stole the ball from an opponent\'s possession while on the court.</p>';
  } else if (input === 'BLK%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">block percentage</span> is an estimate of the percentage of times the player blocked an opponent\'s two point scoring attempt.</p>';
  } else if (input === 'TOV%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">turnover percentage</span> is an estimate of the number of turnovers per 100 plays the player has.</p>';
  } else if (input === 'USG%') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">usage percentage</span> is an estimate of the number of team plays a player used while on the court.</p>';
  } else if (input === 'OWS') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">total offensive win share</span> is an estimate of wins contributed to a player\'s offense.</p>';
  } else if (input === 'DWS') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">total defensive win share</span> is an estimate of wins contributed to a player\'s defense.</p>';
  } else if (input === 'WS') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">win share</span> is an estimate of the number of wins contributed to a player.</p>';
  } else if (input === 'WS/48') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">win shares per 48 minutes</span> is an estimate of the wins contributed to by a player per 48 minutes.</p>';
  } else if (input === 'OBPM') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">offensive box plus/minus</span> is an estimate of the offensive contributions of a player\'s box plus/minus score.</p>';
  } else if (input === 'DBPM') {
    document.getElementById('dom').innerHTML = '<p class="desc">The <span id="blue">defensive box plus/minus</span> is an estimate of the defensive contributions of a player\'s box plus/minus score.</p>';
  } else if (input === 'BPM') {
    document.getElementById('dom').innerHTML = '<p class="desc"><span id="blue">Box Plus/Minus</span> is an estimate of a player\'s score per 100 possessions.</p>';
  } else if (input === 'VORP') {
    document.getElementById('dom').innerHTML = '<p class="desc"><span id="blue">Value over replacement player</span> is an estimate of a player\'s contributions over 100 team possessions over the player who replaced him in game.</p>';
  }

  $('#playerChart').replaceWith('<canvas id="playerChart" width="650" height="450"></canvas>');

  var barData = {
    labels: myLabel(sorter(input)),
    datasets: [
      {
        fillColor: '#66E0FF',
        strokeColor: '#006FA5',
        highlightFill: 'rgba(255,0,0,.5)',
        highlightStroke: 'rgba(255,0,0,1)',
        data: myData(sorter(input))
      },
    ]
  }

  var playerChart = document.getElementById('playerChart').getContext('2d');

  var myBarChart = new Chart(playerChart).Bar(barData, {
    scaleFontColor: 'rgba(255,255,255,.8)',
    scaleLineColor: 'rgba(255,255,255,1)',
    scaleShowGridLines : true,
    scaleGridLineColor : 'rgba(120,120,120,.65)',
  });
}

