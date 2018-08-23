// new game start set scores to 0

var activePlayer, scores, roundScore, currentRoll, buttonRoll, buttonHold, buttonNewGame;



// activePlayer    = document.getElementById("name-");
currentRoll     = document.getElementById("current-");
buttonRoll      = document.querySelector(".btn-roll");
buttonHold      = document.querySelector(".btn-hold");
buttonNewGame   = document.querySelector(".btn-new");
scores          = [0, 0];
roundScore      = 0;
activePlayer    = 0;

start();

function start(){
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".dice").style.display = "none";
    activePlayer    = 0;
}

buttonRoll.addEventListener("click", function(){
    // Random number
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    // Display result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + diceRoll + ".png";
    // Update current score
    if(diceRoll !== 1){
        roundScore += diceRoll;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }
});