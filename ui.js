//function imports

/* Create three buttons, one for each selection. Add an event 
listener to the buttons that call your playRound function with 
the correct playerSelection every time a button is clicked.
 (you can keep the console.logs for this step)*/

//button event listeners
// Get all buttons for human selection
const btnChoices = document.querySelectorAll("button");
const outcomeBox = document.getElementsByClassName("#outcome");

btnChoices.forEach((button) => {
  button.addEventListener("click", function (e) {
    let humanChoice = this.className;
    getHumanChoice(humanChoice);
  });

  function updateBox() {
    const outcomeBox = document.createElement("p");
    const text = document.createTextNode(this.className);
    outcomeBox.appendChild(text);
  }
});
// playGame() logs to #outcome
