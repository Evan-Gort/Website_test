var platform;
var number = "ad79003017899a1730d4fd31778d15d4";
var apisite;
var input;
var url;
var totalp;
var kills;
var rank;
var level;
var games;
var prestige;
var damage;
var kdr;
var wins;
var top3;
var rankscore;
var Name;

function othername() {
  input = document.getElementById("userInput").value;
  if(input == "kills"){
  document.getElementById("demo1").innerHTML = "Your a bitch and no one likes you";
  }else{
  url = "https://api.mozambiquehe.re/bridge?auth=" + number + "&player=" + input + "&platform=" + platform;
    scrapeHTML();
  }
}


function choose(plat) {
  platform = plat;
}

function search(stat, place, dist){
  var i = 0;
  var j = 0;
  var match = [];
  while(i < apisite.length){
    j = apisite.indexOf(stat, i);
    if(j != -1){
      match.push(j);
      i = j+1;
    }else{
      i = apisite.length;
    }
  }
  value = apisite.substring(match[place] + stat.length + dist, match[place] + stat.length + dist + 9);
  i = 0;
  while(i < value.length){
    if(value[i] == "," || value[i] == '}' || value[i] == '"'){
      value = value.substring(0,i);
      break;
    }
    i++;
  }
  return value;
}

function searchtotal(stat, place, dist){
  var i = apisite.indexOf('"total"');
  var j = 0;
  var match = [];
  while(i < apisite.length){
    j = apisite.indexOf(stat, i);
    if(j != -1){
      match.push(j);
      i = j+1;
    }else{
      i = apisite.length;
    }
  }
  value = apisite.substring(match[place] + stat.length + dist, match[place] + stat.length + dist + 9);
  i = 0;
  while(i < value.length){
    if(value[i] == "," || value[i] == '}' || value[i] == '"'){
      value = value.substring(0,i);
      break;
    }
    i++;
  }
  return value;
}

function findlegend(legend){
  var place = apisite.indexof(legend);
  return place;
}

function rankScore(){
  return search("Rank", 0, 3);
}
function rank(){
  return search("rankName", 0, 3) + " " + search("rankDiv", 0, 2);
}

function levelPrestige(){
  return search('levelPrestige', 0, 2);
}

function level(){
  return search('level', 0, 2);
}

function kills(){
  return searchtotal('"BR Kills"', 0, 9);
}

function gamesplayed(){
  return searchtotal('"BR Games played"', 0, 9);
}

function BRTop3(){
  return searchtotal('"BR Top 3"', 0, 9)
}

function kdr(){
  return searchtotal('"kd"', 0, 9)
}

function wins(){
  return searchtotal('"BR Wins"', 0, 9)
}

function damage(){
  return searchtotal('"BR Damage"', 0, 9)
}

function Name(){
  return search("name", 0, 3);
}

async function fetchHTML(url2) {
  try {
    const response = await fetch(url2);
    const html = await response.text();
    return html;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    return null;
  }
}

async function scrapeHTML() {
  const url2 = url;
  const htmlContent = await fetchHTML(url2);
            
  if (htmlContent) {
  // Do something with the scraped HTML content
  console.log('Scraped HTML:', htmlContent);
                
  apisite = htmlContent;
  } else {
    console.log('Failed to scrape HTML from the URL:', url2);
  }
  kills = kills();
  rank = rank();
  level = level();
  games = gamesplayed();
  prestige = levelPrestige();
  damage = damage();
  kdr = kdr();
  wins = wins();
  top3 = BRTop3();
  rankscore = rankScore();
  Name = Name()
}