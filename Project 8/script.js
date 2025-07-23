const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const results = document.querySelector(".results");
const score = document.querySelector(".score");

let playerscore = 0;
let computerscore = 0;
const choices = ["rock", "paper", "scissors"];

rockButton.addEventListener("click", () => {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

paperButton.addEventListener("click", () => {
  const playerChoice = "paper";
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

scissorsButton.addEventListener("click", () => {
  const playerChoice = "scissors";
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `It's a tie! You both chose ${playerChoice}`;
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win! ${capitalize(playerChoice)} beats ${computerChoice}`;
  } else {
    return `You lose! ${capitalize(computerChoice)} beats ${playerChoice}`;
  }
}

function playRound(playerChoice, computerChoice) {
  const result = getWinner(playerChoice, computerChoice);
  results.textContent = result;

  if (result.startsWith("You win!")) {
    playerscore++;
  } else if (result.startsWith("You lose!")) {
    computerscore++;
  }

  score.innerHTML = `
    Your score: <span class="psc">${playerscore}</span> 
    Computer's score: <span class="csc">${computerscore}</span>
  `;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}