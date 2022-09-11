var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")
var gameMusic = document.getElementById("gameMusic")
var gameOverMusic = document.getElementById("gameOverMusic")


gameMusic.play()


// Enemy-car move feature
blueCar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    counter++;

    //To increase speed
    if (counter > 10) {
        blueCar.style.animationDuration = "0.7s"
    } else if (counter > 30) {
        blueCar.style.animationDuration = "0.5s"
    }
})

//adding rececar move feature
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if (raceCarLeft < 260) { raceCar.style.left = (raceCarLeft + 130) + "px" }
        jumpsound.play()

    };

    if (e.keyCode == "37") {
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if (raceCarLeft > 0) {
            raceCar.style.left = (raceCarLeft - 130) + "px"
            jumpsound.play()

        }

    }
})


// Creating Game over functionality
setInterval(function Gameover() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if ((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter} `;

        counter = 0;

        //Top stop game music
        gameOverMusic.play()
        gameMusic.pause();
        gameMusic.currentTime = 0;
    }
}, 10)

