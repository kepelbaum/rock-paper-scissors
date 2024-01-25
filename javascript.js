getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3);
    let str;
    rand == 2 ? str = 'Paper' : rand == 1 ? str='Scissors' : str='Rock';
    return str;
}
playRound = () => {
    let playerSelection, computerSelection;
    let toggle = 0;
    makeMove = () => {
        if (toggle == 0) {
        playerSelection = prompt("Make your move", "");
        }
        else if (toggle == 1) {
        playerSelection = prompt("TIE. Replay the round", "");
        }
        else {
            playerSelection = prompt("Invalid move, try again", "");
        }
        playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
        while (playerSelection != "Rock" && playerSelection != 'Scissors' && playerSelection != 'Paper') {
            toggle = 2;
            makeMove();
        }
    }
    makeMove();
    computerSelection = getComputerChoice()
    while (playerSelection == computerSelection) {
        toggle = 1;
        makeMove();
        computerSelection = getComputerChoice();
    }
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Rock') {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}
game = () => {
    let playerScore = 0;
    let computerScore = 0;
    console.log('Welcome to Rock Paper Scissors! \nPlayer: 0, Computer: 0');
    let result;
    while (computerScore < 3 && playerScore < 3) {
        result = playRound();
        console.log(result);
        if (result.slice(0, 7) == 'You Win') {
            playerScore++;
        }
        else {
            computerScore++;
        }
        console.log('Player: ' + playerScore + ', Computer: ' + computerScore);
    }
    if (playerScore > computerScore) {
        console.log('Congratulations, you won!')
    }
    if (computerScore > playerScore) {
        console.log('Too bad, you lost!')
    }
}
game();
