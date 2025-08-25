//* computerChoice logic
let computerChoice = Math.random();
function getComputerChoice(computerChoice) {
  if (computerChoice <= 0.333) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.666) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

//*humanChoice logic
let humanChoice = prompt("rock || paper || scissors");
function getHumanChoice() {
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  )
    return humanChoice;
}

//*score variables
var computer = "computer";
var human = "human";
var tie = "tie";
let humanScore = 0;
let computerScore = 0;
var currentWinner;
var winner;

//* single round logic
function playRound(humanChoice, computerChoice) {
  getComputerChoice(computerChoice);
  getHumanChoice(humanChoice);
  //* outcome logic

  //* humanChoice = rock
  if (humanChoice === "rock" && computerChoice === "paper") {
    currentWinner = computer;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    currentWinner = human;
  }
  //*humanChoice = paper
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    currentWinner = computer;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    currentWinner = human;
  }
  //*humanChoice = scissors
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    currentWinner = computer;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    currentWinner = human;
  }
  //*tie
  else if (humanChoice === computerChoice) {
    currentWinner = tie;
  }

  //* winner logic
  if (currentWinner === human) {
    ++humanScore;
  } else if (currentWinner === computer) {
    ++computerScore;
  } else currentWinner === tie;
  return currentWinner;
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
/*  if (humanScore > computerScore) {
    winner = human;
  } else if (humanScore < computerScore) {
    winner = computer;
  } else winner = tie;
  return winner; */

//* game logic
