var orig = 'x';
var dest = 'x';
var url = 'x';

function selectStation(station){
  if (orig == 'x'){
    orig = station
  }
  else if (dest == 'x'){
    dest = station
    url = 'https://m.bart.gov/schedules/qp_results?orig=' + orig + '&dest=' + dest + '&type=departure&date=today&time=now'
    makeButton()
  }
}

function makeButton(){
  if (dest != 'x'){
    document.getElementById('goButton').innerHTML = orig + ' to ' + dest;
    document.getElementById('goButton').style.display = 'initial';
    document.getElementById('resetButton').style.display = 'initial';
    document.getElementById('timer').style.display = 'initial';
    setTimeout(reset, 6000)
    }
  }

function reset(){
  document.getElementById('goButton').style.display = 'none';
  document.getElementById('timer').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  orig = 'x';
  dest = 'x';
  url = 'x';
}

function openInNewTab() {
  var win = window.open(url, '_blank');
  win.focus();
  reset()
}