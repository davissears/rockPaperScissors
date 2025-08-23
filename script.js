//*
let computerChoice = Math.random();
function getComputerChoice(computerChoice) {
  if (computerChoice < 0) {
    return "rock";
  } else if (computerChoice === 0) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice(computerChoice));

let userChoice = prompt("rock || paper || scissors");

function getHumanChoice(userChoice) {
  if (userChoice.toLowerCase() === "rock" || "paper" || "scissors") {
    return userChoice.toLowerCase();
  } else prompt("rock || paper || scissors");
  return userChoice;
}
console.log(getHumanChoice(userChoice));
