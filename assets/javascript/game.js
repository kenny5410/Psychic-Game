
// Array for computer options
var computerOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuessLog = [];


//Variables for HTML references
var winsText = document.getElementById("wins-text"); 
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesLogText = document.getElementById("guesses-log-text");

//function for onkeyup
document.onkeyup = function(event) {
    var userGuess = event.key;

    var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    //resetGame();

    if (userGuess === computerGuess) {
        wins++;
        alert("Congrats! You win!");
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        resetGame();
    }
        if (userGuess != computerGuess) {
            guessesLeft--;
            userGuessLog.push(userGuess);
            document.getElementById("guesses-log-text").innerHTML = "Your Guesses So Far: " + userGuessLog;
        }
        if (guessesLeft === 0) {
            alert("Sorry! You lose!");
            losses++;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
            resetGame();
        }
        
        function resetGame() {
            wins ;
            losses ;
            guessesLeft = 10;
            userGuessLog = [];
        }
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    };
