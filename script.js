//* computerChoice logic
let computerChoice = Math.random();
function getComputerChoice(computerChoice) {
  if (computerChoice <= 0.333) {
    return "rock";
  } else if (computerChoice <= 0.666) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice(computerChoice));

//*userChoice logic
let userChoice = prompt("rock || paper || scissors");
function getHumanChoice(userChoice) {
  if (userChoice === "rock" || "paper" || "scissors") return userChoice;
}
console.log(getHumanChoice(userChoice));

//*score variables
var computer = "computer";
var human = "human";
let humanScore = 0;
let computerScore = 0;
var currentWinner;
let roundWinner = Math.max(humanScore, computerScore);
//* single round logic
function playRound(humanChoice, computerChoice) {
  if ((humanChoice = "rock") && (computerChoice = "paper")) {
    currentWinner = computer;
    return currentWinner;
  } else if ((humanChoice = "rock") && (computerChoice = "scissors")) {
    currentWinner = human;
    return currentWinner;
  }
  console.log(currentWinner);
  if ((currentWinner = human)) {
    ++humanScore;
  } else if ((currentWinner = computer)) {
    ++computerScore;
  }
  {
    return currentWinner;
  }
}
console.log(currentWinner, roundWinner);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
{
}
console.log(currentWinner, roundWinner);


