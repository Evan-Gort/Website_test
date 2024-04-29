var platform = "none";
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


//this function takes in the data entered by the user and stores them in variable and use those varables to make the url
function othername() {
  //if statement to check if the user has entered a platform
  if (platform == "none"){
    alert("Please choose a platform");
  }else{
    //puts the user input into a variable
    input = document.getElementById("userInput").value;
    //construct the url that contian the account details with the account name and platform selected
    url = "https://api.mozambiquehe.re/bridge?auth=" + number + "&player=" + input + "&platform=" + platform;
    scrapeHTML();
  }
}

//this function activates when one of the radio buttons is clicked and sets a variable according to the platform selected
function choose(plat) {
  platform = plat;
}

//this function searches for whatever statistic uses the variable place to determine which mention of the statistic we want to take and then after that we use the variable dist to take the value beside of the statistic mentioned
function search(stat, place, dist){
  var i = 0;
  var j = 0;
  var match = [];
  //this loop finds every mention of the statistic and stores it in an array
  //if no mention it returns -1
  while(i < apisite.length){
    j = apisite.indexOf(stat, i);
    if(j != -1){
      match.push(j);
      i = j+1;
    }else{
      i = apisite.length;
    }
  }
  //this constructs the value related to the statistic we want to take
  value = apisite.substring(match[place] + stat.length + dist, match[place] + stat.length + dist + 9);
  i = 0;
  //stops the string at the mention of a comma or bracket
  while(i < value.length){
    if(value[i] == "," || value[i] == '}' || value[i] == '"'){
      value = value.substring(0,i);
      break;
    }
    i++;
  }
  return value;
}

//this function is almost the same as the search function but it takes in the statistic we want to take and then searches after the mention of total to find the total value
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

//all of these funciton finds the values related to the stats and stores them in variables
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

//this function takes the url and uses the fetch function to get the data from the url and then it returns it to the scrapHTML function
async function fetchHTML(url2) {
  try {
    response = await fetch(url2);
    html = await response.text();
    return html;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    return null;
  }
}

//this function calls on the fetchHTML function and then it takes the data from the fetchHTML function and stores it in a variable
//after the entirty of the site is stored in a variable we first check to see if the account is valid and then we put all the stats values in variables and after that we display the values
async function scrapeHTML() {
  url2 = url;
  htmlContent = await fetchHTML(url2);

  if (htmlContent) {
  console.log('Scraped HTML:', htmlContent);

  apisite = htmlContent;
  } else {
    console.log('Failed to scrape HTML from the URL:', url2);
  }
  if (apisite.indexOf("Error") != -1){
    alert("Please enter a valid account name");
  }else{
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
    displaystats();
  }
}

//this function takes the values of the stats and displays them on the screen
function displaystats(){
  document.getElementById("demo").innerHTML = "Name: " + Name;
  document.getElementById("demo1").innerHTML = "Kills: " + kills;
  document.getElementById("demo2").innerHTML = "Rank: " + rank;
  document.getElementById("demo3").innerHTML = "Level: " + level;
  document.getElementById("demo4").innerHTML = "Prestige: " + prestige;
  document.getElementById("demo5").innerHTML = "Games Played: " + games;
  document.getElementById("demo6").innerHTML = "Top 3: " + top3;
  document.getElementById("demo7").innerHTML = "Wins: " + wins;
  document.getElementById("demo6").innerHTML = "Damage: " + damage;
}