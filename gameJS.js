// Starting over because code was a mess
function game(){
let computerScore = 0;
let playerScore = 0;
let roundWinner = " ";

    function playGame() {
        playRound(getPlayerChoice, getComputerChoice);

    }

    function playRound_fix(getPlayerChoice, getComputerChoice){
        if (getPlayerChoice == getComputerChoice){
            console.log("Tie")
        } 
        else if (getPlayerChoice == 'ROCK'){
            if (getComputerChoice == 'SCISSOR'){
                console.log("Player Win!")
                playerScore++;
            } else {
                console.log("Computer Win!")
                computerScore++;
            }
        }
        else if (getPlayerChoice == 'PAPER'){
            if (getComputerChoice == 'ROCK'){
                console.log("Player win!")
                playerScore++;
            }
            else {
                console.log("Computer win!")
                computerScore++;
            }
        }
        else if (getPlayerChoice == 'SCISSOR') {
            if (getComputerChoice == 'PAPER'){
                console.log("Player Win!")
                playerScore++;
            } else {
                console.log("Computer win!")
                computerScore++;
            }

        }

    // function playRound(getPlayerChoice, getComputerChoice) {
    //     if (getPlayerChoice === "ROCK" && getComputerChoice === "ROCK") {
    //         return "Chose same, tie game";
    //     } else if (getPlayerChoice === "ROCK" && getComputerChoice === "SCISSOR") {
    //         return "Player win!";
    //     } else if (getPlayerChoice === "PAPER" && getComputerChoice === "ROCK") {
    //         return "Player win!";
    //     } else if (getPlayerChoice === "SCISSOR" && getComputerChoice === "PAPER") {
    //         return "Player win!";
    //     } else if (getPlayerChoice === "ROCK" && getComputerChoice === "PAPER") {
    //         return "Computer win!";
    //     } else if (getPlayerChoice === "PAPER" && getComputerChoice === "SCISSOR") {
    //         return "Computer win!";
    //     } else if (getPlayerChoice === "SCISSOR" && getComputerChoice === "ROCK") {
    //         return "Computer win!";
    //     } else {
    //         return "Something went wrong";
    //     }
    // }
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


    function gameScore(playRound) {
        if (playRound = "Player win!") {
            playerScore++;
        }else {
            computerScore++;
        }
    }

    function gameOver(playerOptions, movesLeft) {
        return playerScore === 5 || computerScore === 5
    }
}
getComputerChoice()