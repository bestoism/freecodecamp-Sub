let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i < 3; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}:`);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    console.log('---------------------');
  }

  if (humanScore > computerScore) {
    return "You win the game!";
  } else if (computerScore > humanScore) {
    return "You lose the game!";
  } else {
    return "The game is a tie!";
  }
}