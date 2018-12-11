var pcGenerated;
var i = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var crystalMin = 1;
var crystalMax = 13;
var totScore = 0;
var wins=0;
var lost=0;

// Generates variable values
function generateNumbers() {
    pcGenerated = Math.floor(Math.random() * (120 - 19 + 1))
    $(".pointsNeeded").text(pcGenerated)
    crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    //runs check on each variable, if outside min/max range, generates again
    if (pcGenerated < 19 || pcGenerated > 120) {
        pcGenerated = Math.floor(Math.random() * (120 - 19 + 1))
        $(".pointsNeeded").text(pcGenerated)
    }
    if (crystalOne < 1 || crystalOne > 12) {
        crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    }
    if (crystalTwo < 1 || crystalTwo > 12) {
        crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    }
    if (crystalThree < 1 || crystalThree > 12) {
        crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    }
    if (crystalFour < 1 || crystalFour > 12) {
        crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 2));
    }

}

//clears running score
function clearScore() {
    totScore = 0;
}

//checks on each button click to determine whether you have win, lost, or keep going
function scoreCheck() {
    if (pcGenerated == totScore) {
        wins++;
        clearScore();
        generateNumbers();
         $(".wins").text("Wins: " + wins);
         $(".tally").text(totScore);
         document.getElementById("youWin").play();
    }

    if (totScore > pcGenerated) {
        lost++;
        clearScore();
        generateNumbers();
        $(".losses").text("Losses:" + lost);
        $(".tally").text(totScore);
        document.getElementById("youLost").play();
    }
}

//generates initial numbers on document ready, loads button clicks
$(document).ready(function () {
    generateNumbers();

    $(".crystal_btn1").on("click", function () {
        console.log("clickworks");
        totScore = (totScore + crystalOne);
        $(".tally").text(totScore);
        scoreCheck();
    })

    $(".crystal_btn2").on("click", function () {
        console.log("clickworks");
        totScore = (totScore + crystalTwo);
        $(".tally").text(totScore);
        scoreCheck();
    })

    $(".crystal_btn3").on("click", function () {
        console.log("clickworks");
        totScore = (totScore + crystalThree);
        $(".tally").text(totScore);
        scoreCheck();
    })

    $(".crystal_btn4").on("click", function () {
        console.log("clickworks")
        totScore = (totScore + crystalFour);
        $(".tally").text(totScore);
        scoreCheck();
    })
})

