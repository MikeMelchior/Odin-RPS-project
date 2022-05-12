const computerPlay = () => {
    let moves = ['rock', 'paper', 'scissors'];
    let randInt = Math.floor(Math.random() * 3);
    return moves[randInt]
};


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection =='rock' || playerSelection == 'scissors'
        || playerSelection == 'paper') {
            
        } else {
            console.log('choose a valid move');
            return 'c'
        }
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

// let computerSelection = computerPlay()


const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    
    while (playerScore < 3 && computerScore < 3){
        let playerSelection = prompt('choose rock paper or scissors');
        let computerSelection = computerPlay();
        let result = null;
        result = playRound(playerSelection, computerSelection)
        if (result[0] == 'I' || result[0] == 'c'){
            continue;
        } else if (result.slice(0, 5) == 'You W') {
            playerScore += 1;
            console.log(result, `score: player: ${playerScore} computer: ${computerScore}`);
        } else if (result.slice(0, 5) == 'You L') {
            computerScore += 1;
            console.log(result, `score: player: ${playerScore} computer: ${computerScore}`);

        } 
        
    };
    if (playerScore == 3) {
        console.log(`You Win ${playerScore} - ${computerScore}`)
    } else if (computerScore == 3) {
        console.log(`You Lose ${playerScore} - ${computerScore}`)
    }

}
