// adds audio to all buttons in index.html
var numberTap = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberTap; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

// Detecting keyboardpress
document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

// It adds audio to keys 
function makeSound(key) {
    switch (key) {
        case "q":
            var alertNotification = new Audio("sounds/alert-notification.wav")
            alertNotification.play();
            break;
        case "a":
            var blessChoir = new Audio("sounds/bless-choir.wav")
            blessChoir.play();
            break;
        case "w":
            var cartoonToy = new Audio("sounds/cartoon-toy-whistle.wav")
            cartoonToy.play();
            break;
        case "s":
            var cartoonWhistling = new Audio("sounds/cartoon-whistling.wav")
            cartoonWhistling.play();
            break;
        case "e":
            var cinematicTribal = new Audio("sounds/cinematic-tribal-flute.wav")
            cinematicTribal.play();
            break;
        case "d":
            var coolGuitar = new Audio("sounds/cool-guitar-riff.wav")
            coolGuitar.play();
            break;
        case "r":
            var fluteAlert = new Audio("sounds/flute-alert.wav")
            fluteAlert.play();
            break;
        case "f":
            var guitarString = new Audio("sounds/guitar-string.wav")
            guitarString.play();
            break;
        case "p":
            var guitarStroke = new Audio("sounds/guitar-stroke-up.wav")
            guitarStroke.play();
            break;
        case "l":
            var guitarOne = new Audio("sounds/guitar1.wav")
            guitarOne.play();
            break;
        case "o":
            var littlePiano = new Audio("sounds/little-piano-game-over.wav")
            littlePiano.play();
            break;
        case "k":
            var losingPiano = new Audio("sounds/losing-piano.wav")
            losingPiano.play();
            break;
        case "i":
            var mysteryHarp = new Audio("sounds/mystery-harp-notification.wav")
            mysteryHarp.play();
            break;
        case "j":
            var orchestralViolin = new Audio("sounds/orchestral-violin-jingle.wav")
            orchestralViolin.play();
            break;
        case "u":
            var pianoGameOver = new Audio("sounds/piano-game-over.wav")
            pianoGameOver.play();
            break;
        case "h":
            var warfareHorn = new Audio("sounds/warfare-horn.wav")
            warfareHorn.play();
            break;
        case "z":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "x":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "c":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "v":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "b":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "n":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "m":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(key);
    }
}

// Callback function
// function anotherAddEventListener(typeOfEvent, callback){
//     // detect event code
//     var eventThatHappened = {
//         eventType: "keypress",
//         key: "p",
//         durationOfKeypress: 2
//     }
//     if (eventThatHappened.eventType === typeOfEvent) {
//         callback(eventThatHappened);
//     }

// }

// it also shows us the key press by user and it's info
document.addEventListener("keypress", function (event) {
    console.log(event);
})

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}