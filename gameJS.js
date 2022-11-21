// Starting over because code was a mess
function game(){
let computerScore = 0;
let playerScore = 0;
let roundWinner = "";

    function playGame() {
        playRound(getPlayerChoice, getComputerChoice);

    }
    function playRound(getPlayerChoice, getComputerChoice) {
        if (getPlayerChoice === "ROCK" && getComputerChoice === "ROCK") {
            return "Chose same, tie game";
        } else if (getPlayerChoice === "ROCK" && getComputerChoice === "SCISSOR") {
            return "Player win!";
        } else if (getPlayerChoice === "PAPER" && getComputerChoice === "ROCK") {
            return "Player win!";
        } else if (getPlayerChoice === "SCISSOR" && getComputerChoice === "PAPER") {
            return "Player win!";
        } else if (getPlayerChoice === "ROCK" && getComputerChoice === "PAPER") {
            return "Computer win!";
        } else if (getPlayerChoice === "PAPER" && getComputerChoice === "SCISSOR") {
            return "Computer win!";
        } else if (getPlayerChoice === "SCISSOR" && getComputerChoice === "ROCK") {
            return "Computer win!";
        } else {
            return "Something went wrong";
        }
    function getPlayerChoice() {
        let playerChoice = prompt("choose")

    }

    function getComputerChoice() {
        choice = Math.floor(Math.random() * 3)
        switch(choice) {
            case 0:
                console.log('ROCK')
            case 1:
                console.log('PAPER')
            case 2:
                console.log('SCISSOR')
        }
    }


    function gameScore() {
        
    }

    function gameOver (playerOptions, movesLeft) {
        return playerScore === 5 || computerScore === 5
    }
}


getComputerChoice()