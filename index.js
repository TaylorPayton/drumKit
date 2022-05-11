function mainFunction(){
var randomNum = Math.floor((Math.random()*6)+1);

var randomNumTwo = Math.floor((Math.random()*6)+1);

if(randomNum == 1){

  document.querySelector("img.img1").src="pictures/dice1.png";
}
else if(randomNum == 2 ){

  document.querySelector("img.img1").src="pictures/dice2.png";
}
else if(randomNum == 3 ){

  document.querySelector("img.img1").src="pictures/dice3.png";
}
else if(randomNum == 4 ){

  document.querySelector("img.img1").src="pictures/dice4.png";
}
else if(randomNum == 5 ){

  document.querySelector("img.img1").src="pictures/dice5.png";
}
else if(randomNum == 6 ){

  document.querySelector("img.img1").src="pictures/dice6.png";
}
else{
  console.log("wrong");
}


if(randomNumTwo == 1){

  document.querySelector("img.img2").src="pictures/dice1.png";
}
else if(randomNumTwo == 2 ){

  document.querySelector("img.img2").src="pictures/dice2.png";
}
else if(randomNumTwo == 3 ){

  document.querySelector("img.img2").src="pictures/dice3.png";
}
else if(randomNumTwo == 4 ){

  document.querySelector("img.img2").src="pictures/dice4.png";
}
else if(randomNumTwo == 5 ){

  document.querySelector("img.img2").src="pictures/dice5.png";
}
else if(randomNumTwo == 6 ){

  document.querySelector("img.img2").src="pictures/dice6.png";
}
else{
  console.log("wrong");
}

if(randomNum > randomNumTwo){
  document.querySelector("h1").innerHTML=" 🚩Player 1 Wins";
}
else if(randomNum < randomNumTwo){
  document.querySelector("h1").innerHTML=" Player 2 Wins🚩";
}
else if(randomNum == randomNumTwo){
  document.querySelector("h1").innerHTML=" Draw!";
}

}
