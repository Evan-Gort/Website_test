var platform;
var apisite = '"level": 36666,"level": 366,"level": 36,';
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


function search(stat, place){
  var i = 0;
  var j = 0;
  var match = [];
  while(i < apisite.length){
    j = apisite.indexOf(level, i);
    if(j != -1){
      match.push(j);
      i = j+1;
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
  document.getElementById("demo").innerHTML = value;
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
                document.getElementById('demo3').innerHTML = htmlContent;
            } else {
                console.log('Failed to scrape HTML from the URL:', url2);
            }
        }