var platform;
var apisite = '"level": 36666,';
level = '"level"';
var number = "ad79003017899a1730d4fd31778d15d4";
var input;
var url;
function othername() {
  input = document.getElementById("userInput").value;
  if(input == "kills"){
  document.getElementById("demo1").innerHTML = "Your a bitch and no one likes you";
  }else{
    url = "https://api.mozambiquehe.re/bridge?auth=" + number + "&player=" + input + "&platform=" + platform;
  document.getElementById("demo1").innerHTML = url;
  }
}
function choose(plat) {
  platform = plat;
}
function getapi() {
  // GET https://api.mozambiquehe.re/bridge?auth=ad79003017899a1730d4fd31778d15d4&player=whatsanalt&platform=origin
}
function test() {
  return url;
}

function search(stat, place){
  var i = 0;
  var j = 0;
  var match = [];
  while(i < apisite.length){
    var j = apisite.indexOf(level);
    if(j != -1){
      match.push(j);
      i = j;
    }else{
      i = apisite.length;
    }
  }
  value = apisite.substring(match[place] + stat.length + 3, match[place] + stat.length + 12);
  i = 0;
  while(i < value.length){
    if(value[i] == ","){
      value = value.substring(0,i);
      break;
    }
    i++;
  }
  document.getElementById("demo3").innerHTML = value;
}