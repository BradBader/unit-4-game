var pcGenerated;
var i = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var crystalMin = 1;
var crystalMax = 12;
var totScore = 0;
var wins = 0;
var lost = 0;
var newCrystals = [];
var crystalsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Generates variable values
function generateNumbers() {
    pcGenerated = Math.round(Math.random() * (120 - 19 + 1) + 19)
    $(".pointsNeeded").text(pcGenerated)
    for (i=0; i < 4; i++) {
        var numbers = Math.floor((Math.random() *crystalsArr.length +0 ));
        var temporary = crystalsArr[numbers];
        newCrystals.push(temporary);
        crystalsArr.splice(numbers, 1);
    }
    //assigns value to crystal one
    crystalOne=(newCrystals[0]);
    console.log(crystalOne);
    //assigns value to crystal two
    crystalTwo=(newCrystals[1]);
    console.log(crystalTwo);
    //assigns value to crystal three
    crystalThree=(newCrystals[2]);
    console.log(crystalThree);
    //assigns value to crystal four
    crystalFour=(newCrystals[3]);
    console.log(crystalFour);
}

//clears running score
function clearScore() {
    totScore = 0;
}

//checks on each button click to determine whether you have won, lost, or keep going
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

