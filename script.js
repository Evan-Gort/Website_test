var platform;
var apisite = '"level": 350,';
level = "level";
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
  matches = apisite.match(stat);
  value = apisite.substring(matches[place]+stat.length()+3, matches[place]+stat.length()+6;
  document.getElementById("demo3") innerHTML = value;
}