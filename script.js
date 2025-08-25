let computerChoice = getComputerChoice();
function getComputerChoice(computerChoice) {
  const computerChoiceValue = Math.random();
  if (computerChoiceValue <= 0.333) {
    computerChoice = "rock";
  } else if (computerChoiceValue <= 0.666) {
    computerChoice = "paper";
  } else if (computerChoiceValue > 0.666) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

let humanChoice = getHumanChoice();
function getHumanChoice() {
  //* toggle one of the two following lines to switch between browser and debugger testing
  //let input = window.prompt("rock || paper || scissors");
  input = "rock";
  if (input === "rock" || input === "paper" || input === "scissors")
    return input;
}
console.log(humanChoice);
console.log(computerChoice);

let humanScore = 0;
let computerScore = 0;
//* single round logic
function playRound(humanChoice, computerChoice) {
  let computer = "computer";
  let human = "human";
  let tie = "tie";
  let currentWinner;

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
  }
  return currentWinner;
}
console.log(playRound());
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
