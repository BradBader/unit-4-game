var pcGenerated;
var maxNum = 139;
var minNum = 19;
var i = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var crystalMin = 0;
var crystalMax = 13;
var totScore = 0;
var wins=0;
var lost=0;

function generateNumbers() {
    pcGenerated = Math.floor(Math.random() * (maxNum - minNum + 1))
    $(".pointsNeeded").html(pcGenerated)
    crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
    crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
    crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
    crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
}

function clearScore() {
    totScore = 0;
}

function scoreCheck() {
    if (pcGenerated == totScore) {
        wins++;
        clearScore();
        generateNumbers();
         $(".wins").text("Wins: " + wins);
         $(".tally").text(totScore);
    }

    if (totScore > pcGenerated) {
        lost++;
        clearScore();
        generateNumbers();
        $(".losses").text("Losses:" + lost);
        $(".tally").text(totScore);
    }
}

$(document).ready(function () {
    generateNumbers();
    if (pcGenerated < 19 || pcGenerated > 120) {
        pcGenerated = Math.floor(Math.random() * (maxNum - minNum + 1))
        $(".pointsNeeded").text(pcGenerated)
    }
    if (crystalOne < 1 || crystalOne > 12) {
        crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
    }
    if (crystalTwo < 1 || crystalTwo > 12) {
        crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
    }
    if (crystalThree < 1 || crystalThree > 12) {
        crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
    }
    if (crystalFour < 1 || crystalFour > 12) {
        crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 1));
    }


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
        totScore = (totScore + crystalFour);
        $(".tally").text(totScore);
        scoreCheck();
    })
})

