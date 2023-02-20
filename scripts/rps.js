// In our UI, the player should be able to play the game by clicking on buttons
// rather than typing their answer in a prompt.

//   For now, remove the logic that plays exactly five rounds. Create three
// buttons, one for each selection. Add an event listener to the buttons that call
// your playRound function with the correct playerSelection every time a button is
// clicked. (you can keep the console.logs for this step) Add a div for displaying
// results and change all of your console.logs into DOM methods. Display the
// running score, and announce a winner of the game once one player reaches 5
// points. You will likely have to refactor (rework/rewrite) your original code to
// make it work for this. That’s OK! Reworking old code is an important part of a
// programmer’s life.

// Get button container
//
const btnContainer = document.getElementById("btns");
// create three buttons
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

// game choices
const choices = Array("rock", "paper", "scissors");

// win states
let playerWins = 0;
let computerWins = 0;
let ties = 0;

// add button texts
rock.textContent = "Rock";
rock.id = "rock";
paper.textContent = "Paper";
paper.id = "paper";
scissors.textContent = "Scissors";
scissors.id = "scissors";

// add buttons to container
btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);

// Add even listeners to buttons
Array.from(btnContainer.children).forEach(function (btn) {
  btn.addEventListener("click", play);
});

// Don't change these - Necessary for game play
// Old code below here -- subject to change
// let play = confirm(
//   "Would you like to play a game?\n\tThis will let you play 5\n\trounds of Rock, Paper, Scissors!"
// );

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// win conditions
// Rock beats scissors
// Scissors beats paper
// Paper beats rock

function compareChoices(computerChoice, playerChoice) {
  let message;
  let player = playerChoice;
  let computer = computerChoice;

  if (player === computerChoice) {
    return "tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

// game logic
function play(e) {
  const playerBtn = e.target.value;

  const computerChoice = getComputerChoice(choices);
  const playerChoice = e.target.id;
  const outcome = compareChoices(computerChoice, playerChoice);
  console.log(playerChoice);
  console.log(computerChoice);
  console.log(outcome);

  switch (outcome) {
    case "tie":
      ties = ties + 1;
      break;
    case "player":
      playerWins = playerWins + 1;
      console.log("Player Wins: " + playerWins);
      if (playerWins === 5 && computerWins < 5) {
        // set player win state
        console.log("Player Wins!");
      }
      break;
    case "computer":
      computerWins = computerWins + 1;
      console.log("Computer Wins: " + computerWins);
      if (playerWins < 5 && computerWins === 5) {
        // set computer win state
        console.log("Computer Wins!");
      }
      break;
  }
}
