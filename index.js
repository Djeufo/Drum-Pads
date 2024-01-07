//Detecting button press
//document.querySelectorAll("button")[0].addEventListener("click", handleClick);
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML); //play from mouse click
        buttonAnnimation(buttonInnerHTML)
    });
}

document.addEventListener("keypress", function(event) {
    playSound(event.key); //play the key from keybord 
    buttonAnnimation(event.key)
});

//Detecting button press
function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

//adding a shadow to the button on press to play, so it should look annimated

function buttonAnnimation(currentPlayingKey) {
    var activeButton = document.querySelector("." + currentPlayingKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}