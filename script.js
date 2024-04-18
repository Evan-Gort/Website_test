var platform;
var number = "ad79003017899a1730d4fd31778d15d4";
var input;
var url;
function othername() {
  input = document.getElementById("userInput").value;
  url = "https://api.mozambiquehe.re/bridge?auth=" + number + "&player=" + input + "&platform=" + platform;
  document.getElementById("demo1").innerHTML = url;
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