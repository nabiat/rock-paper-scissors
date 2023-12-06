function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } else if (playerSelection == "rock") {
        if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper"
        } else {
            return "You Win! Paper beats Rock";
        }
    } else {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors"
        } else {
            return "You Win! Scissors beat Paper";
        }
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);

        if (winner.charAt(4) === 'W') {
            playerCount++;
        } else computerCount++;

        console.log(winner);
    }
    
    if (playerCount === computerCount) {
        return "It was a tie";
    } else if (playerCount > computerCount) {
        return "You won";
    } else {
        return "The computer won";
    }
}

console.log(game());