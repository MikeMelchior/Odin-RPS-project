const computerPlay = () => {
    let moves = ['rock', 'paper', 'scissors'];
    let randInt = Math.floor(Math.random() * 3);
    return moves[randInt]
};

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        result = "It's a tie!";
        showResult()
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors'
        || playerSelection == 'paper' && computerSelection == 'rock'
        || playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore += 1;
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
            showResult()
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock'
    || playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            showResult()
    }
    game()
};


const game = () => {

    let winScore;
    if (threeFlag) winScore = 2;
    if (fiveFlag) winScore = 3;
    if (sevenFlag) winScore = 4;



    if (playerScore == winScore) {
        result = `You Win! Your score: ${playerScore} Computer: ${computerScore}`
        roundMessage.setAttribute('id', 'green-text');
        showResult();
        winMessage = true;
    } else if (computerScore == winScore) {
        result = `You Lose! Your score: ${playerScore} Computer: ${computerScore}`
        roundMessage.setAttribute('id', 'red-text');
        showResult();
        winMessage = true;
    } 
}



let computerSelection;

let playerScore = 0;
let computerScore = 0;

let result = '';

let winMessage;

let threeFlag = false;
let fiveFlag = false;
let sevenFlag = false;



const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const playButton = document.querySelector('.play-button')
const resetButton = document.querySelector('.reset-button')

const showPlayerScore = document.querySelector('.your-current-score')
const showCompScore = document.querySelector('.comp-current-score')

const roundMessage = document.querySelector('.round-message')

const threeRounds = document.querySelector('.three');
const fiveRounds = document.querySelector('.five');
const sevenRounds = document.querySelector('.seven');




function rock(e) {
    if (winMessage) reset();
    playRound('rock', computerSelection);
    showPlayerScore.textContent = `${playerScore}`;
    showCompScore.textContent = `${computerScore}`;
}
function paper(e) {
    if (winMessage) reset();
    playRound('paper', computerSelection);
    showPlayerScore.textContent = `${playerScore}`;
    showCompScore.textContent = `${computerScore}`;
}
function scissors(e) {
    if (winMessage) reset();
    playRound('scissors', computerSelection)
    showPlayerScore.textContent = `${playerScore}`;
    showCompScore.textContent = `${computerScore}`;
}

function reset() {
    winMessage = false;
    roundMessage.removeAttribute('id')

    resetScore();
    result = '';
    showResult()
    showPlayerScore.textContent = '0'
    showCompScore.textContent = '0'
    if (threeFlag) {
        threeRounds.classList.toggle('active')
        threeFlag = false;
        
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    showPlayerScore.textContent = `${playerScore}`;
    showCompScore.textContent = `${computerScore}`;
}

function showResult() {
    roundMessage.textContent = `${result}`
}

function bestOfThree() {
    if (winMessage) reset();
    resetScore();
    threeFlag = !threeFlag;
    threeRounds.classList.toggle('active')
    if (threeFlag) {
        game();
    }
    
}

// function bestOfFive() {
//     fiveFlag = true;
//     game();
// }

// function bestOfSeven() {
//     sevenFlag = true;
//     game();
// }

function log() {
    console.log('hello')
}


rockButton.addEventListener('click', rock);
paperButton.addEventListener('click', paper);
scissorsButton.addEventListener('click', scissors);


resetButton.addEventListener('click', reset)


threeRounds.addEventListener('click', bestOfThree);
// fiveRounds.addEventListener('click', bestOfFive)
// sevenRounds.addEventListener('click', bestOfSeven)

showResult()
