 var randomnumber1 = Math.floor(Math.random() * 6 + 1)      //random number from 1-6
var randomdice = "dice" + randomnumber1 + ".png"; //dice1.png - dice6.png
var randomimagesource = "images/" + randomdice; //images dice1.png - dice6.png
// for player 1 random dice
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);
// for player 2 random dice
var randomnumber2 = Math.floor(Math.random() * 6 + 1)
var randomdice = "dice" + randomnumber2 + ".png";
var randomimagesource = "images/" + randomdice;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "player 1 is winner!!!";
} else if((randomnumber2 > randomnumber1)) {
  document.querySelector("h1").innerHTML = "player 2 is winner!!!";
} else{
  document.querySelector("h1").innerHTML = "Draw!!";
}
