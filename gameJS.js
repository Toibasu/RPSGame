const choices = [
    "rock",
    "paper",
    "scissor",
];

let lives = 5;
function getComputerChoice(){
    let randomizer = Math.floor(Math.random()*choices.length);
    let choice = choices[randomizer]
    console.log(choice);
    return choice
}

function getPlayerChoice(){
    let answer = prompt("Please select your weapon, Rock, Paper or Scissor: ").toLowerCase();
    if (answer === 'rock' || 'paper' || 'scissor') {
        answerInt = parseInt(answer)
        if (choices.indexOf(answer) >-1 ){
            return answer
    } else {
        console.log(`${answer} is not a possible choice`)
            }
        } 
}
// Trying to make a Switch case use for the playRound() function
function playRoundSwitch(playerSelection, computerSelection){
     switch (true) {
            case (playerSelection === computerSelection):
                console.log(`Computer: ${computerSelection} Player: ${playerSelection}, It is a draw!`)
                break;
            case (playerSelection):
                console.log('case2')
                break;
    }
}
// Perfect place to use a switch statment for checking results? Might be better!
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log(`Computer: ${computerSelection} Player: ${playerSelection}, It is a draw!`)
    } else if (playerSelection < computerSelection){
        console.log(`Player wins with ${playerSelection} over ${computerSelection}!`)
    } else {
        console.log(`Computer wins with ${computerSelection} over ${playerSelection}!`)
    }
}

function game() {
    let l = 5
    for (let l = 5; l > 5; i--);
    playRound();
        if (i === 0) {
            console.log('Game Over!')
    }
    console.log("Game Over!")
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
// game()