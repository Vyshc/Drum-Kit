var array = document.querySelectorAll(".drum");
var audio = new Audio("sounds/tom-1.mp3");
for (var i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function () {
    playSound (this.innerHTML);
    buttonAnimation(this.innerHTML); 
  });
}

document.addEventListener("keydown", function(e){
    playSound(e.key);
    buttonAnimation(e.key);
})

function playSound(a){
    switch (a) {
        case "w": //snare
        audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "a": //crash
        audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "s": //kick
        audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "d": //tom1
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "j": //tom2
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "k": //tom3
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "l": //ride
        audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      default:
        alert("press correct keys");
        break;
    
    }
}

function buttonAnimation(keyValue){
    var ran = document.querySelector("."+keyValue);
    ran.classList.add("pressed");
    setTimeout(function(){
        ran.classList.remove("pressed");
    }, 200);
}
