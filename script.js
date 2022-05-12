const computerPlay = () => {
    let moves = ['rock', 'paper', 'scissors'];
    let randInt = Math.floor(Math.random() * 3);
    return moves[randInt]
};

const computerSelection = computerPlay()
const playerSelection = prompt('Choose rock, paper, or scissors')

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'
        || playerSelection == 'paper' && computerSelection == 'rock'
        || playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'
    || playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
};

