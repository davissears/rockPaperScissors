let computerChoice = getComputerChoice;
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

let humanChoice = getHumanChoice;
function getHumanChoice() {
  //* toggle one of the two following lines to switch between browser and debugger testing
  //let input = window.prompt("rock || paper || scissors");
  input = "rock";
  if (input === "rock" || input === "paper" || input === "scissors")
    return input;
}

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
    console.log("Paper cover rock!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    currentWinner = human;
    console.log("Rock breaks scissors!");
  }
  //*humanChoice = paper
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    currentWinner = computer;
    console.log("Scissors cut paper!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    currentWinner = human;
    console.log("Paper covers rock!");
  }
  //*humanChoice = scissors
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    currentWinner = computer;
    console.log("Rock breaks scissors!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    currentWinner = human;
    console.log("Scissors cut paper!");
  }
  //*tie
  else if (humanChoice === computerChoice) {
    currentWinner = tie;
    console.log("It's a Tie!");
  }

  //* winner logic
  if (currentWinner === human) {
    ++humanScore;
    console.log("You win this round!");
  } else if (currentWinner === computer) {
    ++computerScore;
    console.log("You lose this round!");
  }

  function getScore(computerScore, humanScore) {
    return [computerScore, humanScore];
  }
  const score = getScore(computerScore, humanScore);
  return score;
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);
