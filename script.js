// new game start set scores to 0

var activePlayer, scores, roundScore, buttonRoll, buttonHold, buttonNewGame, initWinScore, playingTo, winningScore, gameStart, lastRoll;

buttonNewGame   = document.querySelector(".btn-new");
buttonRoll      = document.querySelector(".btn-roll");
buttonHold      = document.querySelector(".btn-hold");
winningScore    = document.querySelector("input[type='number']");
playingTo       = document.querySelector(".winScoreValue");
initWinScore    = 100;

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
    gameStart       = true;
}

// function newWinningScore(){
//     playingTo.textContent = winningScore.value;
//     initWinScore = Number(winningScore.value);
//     start();
// }

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

buttonNewGame.addEventListener("click", start);

buttonRoll.addEventListener("click", function(){
    if (gameStart){
        // Random number
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        // Display result
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "images/dice-" + diceRoll + ".png";
        console.log(diceRoll);
        // Update current score
        if(diceRoll === 6 && lastRoll === 6){
            scores[activePlayer] = 0;
            document.getElementById("score-" + activePlayer).textContent = 0;
            switchPlayer();
        } else if(diceRoll !== 1){
            roundScore += diceRoll;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else{
            switchPlayer();    
        } lastRoll = diceRoll;
    }
});

buttonHold.addEventListener("click", function(){
    if(gameStart){
        // Add score to activePlayer
        scores[activePlayer] += roundScore;

        // Update score activePlayer
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        // Check if game won
        if(scores[activePlayer] >= initWinScore){
            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            gameStart = false;
        } else {
            // Hold score / next player turn
            switchPlayer();
        }
    }
});

winningScore.addEventListener("change", function(){
    playingTo.textContent = winningScore.value;
    initWinScore = Number(winningScore.value);
    start();
});