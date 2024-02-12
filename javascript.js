getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3);
    let str;
    rand == 2 ? str = 'Paper' : rand == 1 ? str='Scissors' : str='Rock';
    return str;
}
playRound = (a) => {
    let playerSelection = a;
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "It's a TIE! Both player chose " + playerSelection + "!";
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

let btn = document.querySelectorAll('.button');
let div = document.querySelector('.display');
let score = document.querySelector('.score');
let final = document.querySelector('.final');
let newgame = document.querySelector('.newgame');
let playerScore = 0, computerScore = 0;
score.textContent = 'Player: ' + playerScore + ', Computer: ' + computerScore;

function handleRound(e) {
    if (playerScore < 5 && computerScore < 5) {
    let result = playRound(e.target.id);
    div.textContent = result;
        if (result.slice(0, 7) == 'You Win') {
            playerScore++;
            if (playerScore == 5) {
                final.textContent = 'YOU WIN! Well played!'
            }
        }
        else if (result.slice(0, 8) == 'You Lose') {
            computerScore++;
            if (computerScore == 5) {
                final.textContent = 'YOU LOSE! Better luck next time!'
            }
        }
        score.textContent = 'Player: ' + playerScore + ', Computer: ' + computerScore;
    }     
}

btn.forEach((button) => {
    button.addEventListener('click', handleRound);
});

newgame.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = 'Player: ' + playerScore + ', Computer: ' + computerScore;
    final.textContent = '';
    div.textContent = '';
}

