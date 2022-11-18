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
// How do I translate this function so it works with the game() function and integration wiht it's life implementation
// Actually does not work for this perticular usecase
// SCRAPPED FUNCTION
// function playRoundSwitch(playerSelection, computerSelection){
//     let win = false
//      switch (true) {
//             case (playerSelection === computerSelection):
//                 win = 'draw';
//                 return (`Computer: ${computerSelection} Player: ${playerSelection}, It is a draw!`);
//                 break;
//             case (playerSelection === "rock" && computerSelection === "paper"):
//                 win = false;
//                 return (`Computer wins with ${computerSelection} over ${playerSelection}!`);
//                 break;
//             case (playerSelection === "rock" && computerSelection === "scissor"):
//                 win = true;
//                 return (`Player wins with ${playerSelection} over ${computerSelection}!`);
//                 break;
//             case (playerSelection === "paper" && computerSelection === "scissor"):
//                 win = false;
//                 return (`Computer wins with ${computerSelection} over ${playerSelection}!`);
//                 break;
//             case (playerSelection === "paper" && computerSelection === "rock"):
//                 win = true;
//                 return (`Player wins with ${playerSelection} over ${computerSelection}!`);
//                 break;
//             case (playerSelection === "scissor" && computerSelection === "rock"):
//                 win = false;
//                 return (`Computer wins with ${computerSelection} over ${playerSelection}!`);
//                 break;
//             case (playerSelection === "scissor" && computerSelection === "paper"):
//                 win = true
//                 return (`Player wins with ${computerSelection} over ${playerSelection}!`);
//                 break;
//             default:
//                 return (`something went wrong!`)
//     }
// }

// Perfect place to use a switch statment for checking results? Might be better!
function playRound(playerSelection, computerSelection) {
    let win = false
    if (playerSelection === computerSelection){
        return (`Computer: ${computerSelection} Player: ${playerSelection}, It is a draw!`)
        //Player Win Scenarios
    } else if (playerSelection === "rock" && computerSelection === "scissor"){
        win = true
        return (`Player wins with ${playerSelection} over ${computerSelection}!`)
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        win = true
        return (`Player wins with ${playerSelection} over ${computerSelection}!`)
    } else if (playerSelection === "scissor" && computerSelection === "paper") { 
        win = true
        return (`Player wins with ${playerSelection} over ${computerSelection}!`)
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        win = false;
        return (`Computer wins with ${computerSelection} over ${playerSelection}!`);
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        win = false;
        return (`Computer wins with ${computerSelection} over ${playerSelection}!`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        win = false;
        return (`Computer wins with ${computerSelection} over ${playerSelection}!`);
    } else {
        return ('Something went wrong')
    }
}

function game() {
    playRoundSwitch();
    if (win === "draw"){
        console.log('Draw nothing happens')
    } else if (win === true){
        console.log('VICTORY')
    } else {
        console.log('DEFEAT')
    }
        
    
    let l = 5
    for (let l = 5; l > 5; i--);
        if (i === 0) {
            console.log('Game Over!')
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRoundSwitch(playerSelection, computerSelection))
game()