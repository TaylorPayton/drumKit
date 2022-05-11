var buttons = document.querySelectorAll(".drum");

for(i=0;i<buttons.length;i++){
  buttons[i].addEventListener('click', handleClick);
}
document.addEventListener('keydown', handleClick);
 function handleClick(e){
   var buttonInnerHtml = this.innerHTML;
   var buttonPressInnerHtml = e.key;
   switch(buttonInnerHtml||buttonPressInnerHtml){
     case "w":
      alert("w button is working");
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break
      case "a":
        alert("a button is working");
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break
      case "s":
        alert("s button is working");
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break
      case "d":
        alert("d button is working");
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break
      case "j":
        alert("j button is working");
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break
      case "k":
        alert("k button is working");
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break
      case "l":
        alert("l button is working");
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break
      default:
          alert(buttonInnerHtml)

 }
}
