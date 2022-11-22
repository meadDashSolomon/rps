const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
     }
     logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type rps capitalkjoijlj");
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "scissors" && choiceC == "paper")
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logWins(){
    console.log(winners);
}

game();