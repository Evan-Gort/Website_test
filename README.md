# Website_tebst

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>this is a title</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body style="background-color:powderblue;">
  <h1>This is a heading</h1>
  <p style="color:red;">This is a red paragraph.</p>

  Apex legend tracker <br>
  Enter Account Name
  <form id="form" onsubmit="return false;">
    <input type="text" id="userInput" />
    <input type="submit" onclick="othername();" />
  </form>



  <p id="demo"></p>



  <button type="submit" onclick="test()">Try it</button>
  <br>
  <p1 id="demo1"></p1>
  <p2 id="demo2"></p2>

  <script src="script.js"></script>
</body>
<script>
  input;
  function othername() {
    var input = document.getElementById("userInput").value;
    document.getElementById("demo").innerHTML = input;
    var url = "https://api.mozambiquehe.re/bridge?auth=" + number + "&player=" + input + "&platform=origin";
  }

  function getapi() {
    number = "ad79003017899a1730d4fd31778d15d4";
    // GET https://api.mozambiquehe.re/bridge?auth=ad79003017899a1730d4fd31778d15d4&player=whatsanalt&platform=origin
  }
  function test() {
    document.getElementById("demo2").innerHTML = "balls";
  }
  function search(input){

  }
  


</script>

</html>
