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

/*function getHumanChoice(humanChoice) {
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  )
    return humanChoice;
}*/

let humanScore = 0;
let computerScore = 0;
let endGame = false;
function playRound(humanChoice) {
  const userChoice = humanChoice;
  const computerChoice = getComputerChoice();
  let computer = "computer";
  let human = "human";
  let tie = "tie";
  let currentWinner;
  console.log(`ChatGPT chose ${computerChoice} `);
  //console.log(`You chose ${userChoice}`);
  //* userChoice = rock
  if (userChoice === "rock" && computerChoice === "paper") {
    currentWinner = computer;
    console.log("Paper cover rock!");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    currentWinner = human;
    console.log("Rock breaks scissors!");
  }
  //*userChoice = paper
  else if (userChoice === "paper" && computerChoice === "scissors") {
    currentWinner = computer;
    console.log("Scissors cut paper!");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    currentWinner = human;
    console.log("Paper covers rock!");
  }
  //*userChoice = scissors
  else if (userChoice === "scissors" && computerChoice === "rock") {
    currentWinner = computer;
    console.log("Rock breaks scissors!");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    currentWinner = human;
    console.log("Scissors cut paper!");
  }
  //*tie
  else if (userChoice === computerChoice) {
    currentWinner = tie;
    console.log(` It's a Tie! `);
  }

  //* winner logic
  if (currentWinner === human) {
    ++humanScore;
    console.log(` You win this round! `);
  } else if (currentWinner === computer) {
    ++computerScore;
    console.log(` You lose this round! `);
  }
  console.log("");
  let score = `ChatGPT: ${computerScore} Humanity: ${humanScore} `;
  updateScore(score);
  declareWinner(computerScore, humanScore, currentWinner);
  return score, computerScore, humanScore;
}
function declareWinner(computerScore, humanScore, currentWinner) {
  if (computerScore === 5 || humanScore === 5) {
    const outcome = document.getElementById("outcome");
    outcome.innerHTML = "";
    console.log(`${currentWinner} wins!`);
    endGame = true;
    gameEnd(endGame);
  } else return;
}
//end-game logic
