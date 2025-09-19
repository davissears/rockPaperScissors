(function () {
  const originalLog = console.log;
  const outcome = document.getElementById("outcome");

  console.log = function (message) {
    addTextNode(message);
    const lineBreak = document.createElement("br");
    outcome.appendChild(lineBreak);
    originalLog.apply(console, arguments);
  };
})();

//function imports

/* Create three buttons, one for each selection. Add an event 
listener to the buttons that call your playRound function with 
the correct playerSelection every time a button is clicked.
 (you can keep the console.logs for this step)*/

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
    const lineBreak = document.createElement("br"); //define lineBreak
    let humanChoice = this.className; //defines variable to pass to getHumanChoice
    addTextNode(`You Chose ${e.target.textContent} `); //adds content to .outcome div
    const outcome = document.getElementById("outcome");
    outcome.appendChild(lineBreak); // adds linebreak to .outcome div
    playRound(humanChoice); //call game logic function
  });
});

function updateScore(score) {
  const update = document.getElementById("scoreDiv");
  const scoreNode = update.firstChild;

  scoreNode.nodeValue = score;
  //update.removeChild(newScore);
}
// playGame() logs to #outcome
