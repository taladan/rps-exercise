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
console.log(btnContainer);
// create three buttons
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

// btnContainer.appendChild(rock);
// btnContainer.appendChild(paper);
// btnContainer.appendChild(scissors);

// Don't change these - Necessary for game play
// Old code below here -- subject to change
// const choices = Array("rock", "paper", "scissors");
// let play = confirm(
//   "Would you like to play a game?\n\tThis will let you play 5\n\trounds of Rock, Paper, Scissors!"
// );

// if (play) {
//   console.log("Starting game...");
//   game();
// } else {
//   console.log("Cancelling game.");
// }

// function getComputerChoice(choices) {
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// function getPlayerChoice(choices) {
//   let keepGoing = true;

//   while (keepGoing) {
//     let pick = prompt(
//       `Your choices are: Rock, Paper, or Scissors.\nWhat is your choice?`
//     );
//     if (!choices.includes(pick.toLowerCase())) {
//       console.log("Invalid choice.  Try again.");
//       keepGoing = true;
//     } else {
//       keepGoing = false;
//       return pick.toLowerCase();
//     }
//   }
// }

// // win conditions
// // Rock beats scissors
// // Scissors beats paper
// // Paper beats rock

// function compareChoices(computerChoice, playerChoice) {
//   let message;
//   let player = playerChoice;
//   let computer = computerChoice;

//   if (player === computerChoice) {
//     return "tie";
//   } else if (
//     (player === "rock" && computer === "scissors") ||
//     (player === "scissors" && computer === "paper") ||
//     (player === "paper" && computer === "rock")
//   ) {
//     return "player";
//   } else {
//     return "computer";
//   }
// }

// function showOutcome() {
//   return compareChoices(computerChoice, playerChoice);
// }

// // game start
// function game() {
//   let playerWins = 0;
//   let computerWins = 0;
//   let round = 0;
//   let totalRounds = 5;
//   let ties = 0;

//   while (round < totalRounds) {
//     let computerChoice = getComputerChoice(choices);
//     let playerChoice = getPlayerChoice(choices);
//     let outcome = compareChoices(computerChoice, playerChoice);
//     let outcomeMessage = "";

//     switch (outcome) {
//       case "tie":
//         ties += 1;
//         outcomeMessage = "It's a tie!";
//         break;
//       case "player":
//         playerWins += 1;
//         outcomeMessage = "Player wins! :D";
//         break;
//       case "computer":
//         outcomeMessage = "Computer wins! :(";
//         computerWins += 1;
//         break;
//     }

//     // display outcome in an array at the console
//     console.log(outcomeMessage);
//     round += 1;
//   }

//   const outcomeArray = [
//     ["Player Wins", playerWins],
//     ["Computer Wins", computerWins],
//     ["Ties", ties],
//   ];
//   console.table(outcomeArray);
// }
