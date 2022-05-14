const computerPlay = () => {
    let moves = ['rock', 'paper', 'scissors'];
    let randInt = Math.floor(Math.random() * 3);
    return moves[randInt]
};

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    
    // playerSelection = playerSelection.toLowerCase();
    // if (playerSelection =='rock' || playerSelection == 'scissors'
    //     || playerSelection == 'paper') {
            
    //     } else {
    //         alert('choose a valid move');
    //         return 'choose a valid move'
    //     }
    if (playerSelection == computerSelection) {
        //return "It's a tie!"
        alert("it's a tie!")
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'
        || playerSelection == 'paper' && computerSelection == 'rock'
        || playerSelection == 'scissors' && computerSelection == 'paper') {
        //return `You Win! ${playerSelection} beats ${computerSelection}`
        alert(`You Win! ${playerSelection} beats ${computerSelection}`)
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'
    || playerSelection == 'rock' && computerSelection == 'paper'
    || playerSelection == 'paper' && computerSelection == 'scissors') {
        //return `You Lose! ${computerSelection} beats ${playerSelection}`
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`)

    }
};

// let computerSelection = computerPlay()


// const game = () => {
//     let playerScore = 0;
//     let computerScore = 0;
    
//     while (playerScore < 3 && computerScore < 3){
//         let playerSelection = prompt('choose rock paper or scissors');
//         let computerSelection = computerPlay();
//         let result = null;
//         result = playRound(playerSelection, computerSelection)
//         /* check for invalid move in next line*/
//         if (result[0] == 'c'){
//             continue;
//         } else if (result[0] == 'I') {
//             alert(`Draw, both chose ${playerSelection}`)

//         } else if (result.slice(0, 5) == 'You W') {
//             playerScore += 1;
//             alert(`${result}, score: player: ${playerScore} computer: ${computerScore}`);
//         } else if (result.slice(0, 5) == 'You L') {
//             computerScore += 1;
//             alert(`${result}, score: player: ${playerScore} computer: ${computerScore}`);

//         } 
        
//     };
//     if (playerScore == 3) {
//         alert(`You Win! Your score: ${playerScore} Computer: ${computerScore}`)
//     } else if (computerScore == 3) {
//         alert(`You Lose! Your score: ${playerScore} Computer: ${computerScore}`)
//     }

// }

// game()


const buttonOne = document.querySelector('.rock');
const buttonTwo = document.querySelector('.paper');
const buttonThree = document.querySelector('.scissors');


function rock(e) {
    playRound('rock', computerSelection);
    //console.log('rock')
    //console.log(e)
}

function paper(e) {
    playRound('paper', computerSelection);
    //console.log('paper');
    //console.log(e);
}

function scissors(e) {
    playRound('scissors', computerSelection)
    //console.log('scissors');
    //console.log(e);
}


buttonOne.addEventListener('click', rock);
buttonTwo.addEventListener('click', paper);
buttonThree.addEventListener('click', scissors);
