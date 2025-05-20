var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceimage = "dice" + randomNumber1 +".png";

var randomeDiceSource = "images/"+ randomDiceimage;


console.log(randomeDiceSource);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeDiceSource);

//2nd dice

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceimage = "dice" + randomNumber2 +".png";

var randomeDiceSource2 = "images/"+ randomDiceimage;

var image2 = document.querySelectorAll("img")[1];


image2.setAttribute("src", randomeDiceSource2);

var result = document.querySelector("h1");

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="player 1 won"
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="player 2 won"
}
else {
  document.querySelector("h1").innerHTML="Draw"

}