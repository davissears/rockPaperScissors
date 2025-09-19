(function () {
  const originalLog = console.log;
  const outcome = document.getElementById("outcome");

  console.log = function (message) {
    const outcome = document.getElementById("outcome");
    const lineBreak = document.createElement("br");
    addTextNode(message);
    outcome.appendChild(lineBreak);
    originalLog.apply(console, arguments);
  };
})();

const btnChoices = document.querySelectorAll("button"); // button selector

//get text from buttons
function addTextNode(text) {
  const outcomeText = document.createTextNode(text); //
  const outcome = document.getElementById("outcome");

  outcome.appendChild(outcomeText);
}

// react to user selection
btnChoices.forEach((button) => {
  button.addEventListener("click", function (e) {
    const outcome = document.getElementById("outcome");

    outcome.innerHTML = "";
    const lineBreak = document.createElement("br"); //define lineBreak
    let humanChoice = this.className; //defines variable to pass to getHumanChoice
    addTextNode(`You Chose ${e.target.textContent} `); //adds content to .outcome div
    outcome.appendChild(lineBreak); // adds linebreak to .outcome div
    playRound(humanChoice); //call game logic function
  });
});

function updateScore(score) {
  const update = document.getElementById("scoreDiv");
  const scoreNode = update.firstChild;

  scoreNode.nodeValue = score;
  declareWinner(computerScore, humanScore);
}
