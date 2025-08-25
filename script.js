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
console.log(getComputerChoice(computerChoice), computerChoice);

//*humanChoice logic
let humanChoice = prompt("rock || paper || scissors");
function getHumanChoice(humanChoice) {
  if (humanChoice === "rock" || "paper" || "scissors") return humanChoice;
}

//*score variables
var computer = "computer";
var human = "human";
var tie = "tie";
let humanScore = 0;
let computerScore = 0;
var currentWinner;
let roundWinner = Math.max(humanScore, computerScore);

//* single round logic
function playRound(humanChoice, computerChoice) {
  getComputerChoice(computerChoice);
  getHumanChoice(humanChoice);
  //* outcome logic

  //* humanChoice = rock
  if ((humanChoice = "rock") && (computerChoice = "paper")) {
    currentWinner = computer;
  } else if ((humanChoice = "rock") && (computerChoice = "scissors")) {
    currentWinner = human;
  }
  //*humanChoice = paper
  else if ((humanChoice = "paper") && (computerChoice = "scissors")) {
    currentWinner = computer;
  } else if ((humanChoice = "paper") && (computerChoice = "rock")) {
    currentWinner = human;
  }
  //*humanChoice = scissors
  else if ((humanChoice = "scissors") && (computerChoice = "rock")) {
    currentWinner = computer;
  } else if ((humanChoice = "scissors") && (computerChoice = "paper")) {
    currentWinner = human;
  }
  //*tie
  else humanChoice = computerChoice;
  {
    currentWinner = tie;
  }

  //* winner logic
  if ((currentWinner = human)) {
    ++humanScore;
  } else if ((currentWinner = computer)) {
    ++computerScore;
  } else currentWinner = tie;

  {
    return currentWinner, computerScore, humanScore;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//* game logic
playGame();

console.log(
  currentWinner,
  roundWinner,
  computerScore,
  computerChoice,
  humanScore,
  humanChoice
);
