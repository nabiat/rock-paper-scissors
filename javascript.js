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

function game(playerSelection, computerSelection) {
    let winner = playRound(playerSelection, computerSelection);

    if (winner.charAt(4) === 'W') {
        playerScore++;
    } else computerScore++;

    const body = document.querySelector('body');
    const display = document.createElement('div');

    display.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
    body.appendChild(display);
    
    if (playerScore === 5) {
        finishedRound(body, 'You won!');
    } else if (computerScore === 5) {
        finishedRound(body, 'The computer won.');
    }
}

function finishedRound(body, winner) {
    const overallWinnder = document.createElement('div');
    overallWinnder.textContent = winner;
    body.appendChild(overallWinnder);
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => game(button.value, getComputerChoice()));
});