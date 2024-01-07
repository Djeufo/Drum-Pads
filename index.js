//alert("hello!");
/*
//handleClick() the function should not be call like this, but without parenteses , we just need to passe the name of the funtion so that this should happen only when the even harpen
document.querySelector("button").addEventListener("click", handleClick);
function handleClick() {
    alert("just clicked me");
}
/**/
//or
/*
////it is also possible to use anonimous function
document.querySelector("button").addEventListener("click", function() {
    alert("just clicked me");
});
/**/


//Detecting button press
//document.querySelectorAll("button")[0].addEventListener("click", handleClick);
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML); //play from mouse click
    });
}

document.addEventListener("keypress", function(event) {
    playSound(event.key); //play the key from keybord 
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