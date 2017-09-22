var orig = 'x';
var dest = 'x';
var url = 'x';

function selectStation(station){
  if (orig == 'x'){
    orig = station
    makeButton()
  }
  else if (dest == 'x'){
    dest = station
    url = 'https://m.bart.gov/schedules/qp_results?orig=' + orig + '&dest=' + dest + '&type=departure&date=today&time=now'
    makeButton()
  }
}

function makeButton(){
  if (dest == 'x'){
    document.getElementById('goButton').innerHTML = orig + ' to' ;
  }
  else if (dest != 'x'){
    document.getElementById('goButton').innerHTML = orig + ' to ' + dest;
    document.getElementById('goButton').onclick = openInNewTab;
    }
  document.getElementById('goButton').style.display = 'initial';
  document.getElementById('resetButton').style.display = 'initial';
  }

function reset(){
  document.getElementById('goButton').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  orig = 'x';
  dest = 'x';
  url = 'x';
}

function mapDisplay(){
  var mapStatus = document.getElementById('map').style.display;

  if (mapStatus == 'none'){
    document.getElementById('map').style.display = 'initial';
    document.getElementById('mapButton').innerHTML = 'Close Map';
  }
  else{
    document.getElementById('map').style.display = 'none';
    document.getElementById('mapButton').innerHTML = 'Map'
  }
}

function openInNewTab() {
  var win = window.open(url, '_blank');
  win.focus();
  reset();
}