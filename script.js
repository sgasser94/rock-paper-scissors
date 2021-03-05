const buttons = document.querySelectorAll('input');

const roundSummary = document.querySelector('#roundSummary');
let result = roundSummary.textContent;

let playerText = document.querySelector('#playerScore');
let computerText = document.querySelector('#computerScore');

let roundCounter = document.querySelector('#roundNumber');
let playerScore = 0;
let computerScore = 0;

const reloadPrompt = document.querySelector('.reload-prompt');

function computerPlay() {
  let randomValue = Math.floor(Math.random() * 3) + 1;
  if (randomValue === 1) {
    return "rock";
  } else if (randomValue === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let counter = 0;

function playRound(playerSelection) {
  let playerPick = playerSelection.toLowerCase();
  let computerPick = computerPlay();

  if ((playerPick === 'rock' && computerPick === 'scissors') ||
      (playerPick === 'paper' && computerPick === 'rock') ||
      (playerPick === 'scissors' && computerPick === 'paper')) {
        counter++;
        playerScore++;
        roundSummary.textContent = `Round ${counter} winner: You! Your choice of
            ${playerPick} beat the computer's choice of ${computerPick}.`;
  } else if (playerPick === computerPick) {
        roundSummary.textContent = `Round ${counter + 1} is a draw, both you and
            the computer picked ${playerPick}, it is still round ${counter + 1}.`;
  } else {
          counter++;
          computerScore++;
          roundSummary.textContent = `Round ${counter} winner: Computer! Your choice
              of ${playerPick} lost to the computer's choice of ${computerPick}.`;
  }

  playerText.textContent = playerScore;
  computerText.textContent = computerScore;

  if (playerScore === 5) {
      roundSummary.textContent = "The game is over, you have won 5 rounds.";
      reloadPrompt.textContent = "Refresh the page to play again.";
      buttons.forEach(element => {
        element.disabled = true;
      })
  }
  if (computerScore === 5) {
      roundSummary.textContent = "The game is over, the computer has won 5 rounds.";
      reloadPrompt.textContent = "Refresh the page to play again.";
      buttons.forEach(element => {
        element.disabled = true;
      })
  }
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log(playRound(button.value));
  })
})