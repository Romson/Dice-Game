// new game start set scores to 0

var activePlayer, scores, roundScore, buttonRoll, buttonHold, buttonNewGame;

buttonRoll      = document.querySelector(".btn-roll");
buttonHold      = document.querySelector(".btn-hold");
buttonNewGame   = document.querySelector(".btn-new");

function start(){
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    scores          = [0, 0];
    roundScore      = 0;
    activePlayer    = 0;
}

function switchPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // document.querySelector(".dice").style.display = "none";
}

start();

buttonRoll.addEventListener("click", function(){
    // Random number
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    // Display result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + diceRoll + ".png";
    console.log(diceRoll);
    // Update current score
    if(diceRoll !== 1){
        roundScore += diceRoll;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else{
        switchPlayer();    
    }
});

buttonHold.addEventListener("click", function(){
    // Add score to activePlayer
    scores[activePlayer] += roundScore;

    // Update score activePlayer
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    // Check if game won
    if(scores[activePlayer] >= 20){
        document.getElementById("name-" + activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");

    } else {
        // Hold score / next player turn
        switchPlayer();
    }
});

buttonNewGame.addEventListener("click", start);