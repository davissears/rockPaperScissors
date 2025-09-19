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
    outcome.appendChild(lineBreak); // adds linebreak to .outcome div
    
    playGame(humanChoice);
  });
});
// playGame() logs to #outcome
