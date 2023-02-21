/* Page load */
//
//
// Reset scores on page load
let currentScores = resetScores();
playerWins = currentScores[0];
ties = currentScores[1];
computerWins = currentScores[2];

/* Pre-Logic Init */
//
//
// Get button container
const btnContainer = document.getElementById("btns");

// create three buttons
// const rock = document.createElement("button");
// const paper = document.createElement("button");
// const scissors = document.createElement("button");
const rock = document.createElement("figure");
const rockImg = document.createElement("img");
const rockCaption = document.createElement("figcaption");
const rockText = document.createTextNode("Rock");
rockImg.id = "rock";
rockImg.setAttribute("src", "../img/rock.png");

const paper = document.createElement("figure");
const paperImg = document.createElement("img");
const paperCaption = document.createElement("figcaption");
const paperText = document.createTextNode("Paper");
paperImg.id = "paper";
paperImg.setAttribute("src", "../img/paper.png");

const scissors = document.createElement("figure");
const scissorsImg = document.createElement("img");
const scissorsCaption = document.createElement("figcaption");
const scissorsText = document.createTextNode("Scissors");
scissorsImg.id = "scissors";
scissorsImg.setAttribute("src", "../img/scissors.png");

rockCaption.className = "caption";
paperCaption.className = "caption";
scissorsCaption.className = "caption";

// add button texts
rockCaption.appendChild(rockText);
paperCaption.appendChild(paperText);
scissorsCaption.appendChild(scissorsText);

rock.appendChild(rockImg);
rock.appendChild(rockCaption);
paper.appendChild(paperImg);
paper.appendChild(paperCaption);
scissors.appendChild(scissorsImg);
scissors.appendChild(scissorsCaption);

// add buttons to container
btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);

// game choices
const choices = Array("rock", "paper", "scissors");

// Add even listeners to buttons
Array.from(btnContainer.children).forEach(function (btn) {
  btn.addEventListener("click", play);
});

/*  Game logic */
//
//
// Reset win states after winner determined
function resetScores() {
  playerWins = 0;
  ties = 0;
  computerWins = 0;
  updateScoreDisplay();
  return [playerWins, ties, computerWins];
}

// Computer's throw
function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Return round win state
function compareChoices(computerChoice, playerChoice) {
  let message;
  let player = playerChoice;
  let computer = computerChoice;

  // win conditions
  // Rock beats scissors
  // Scissors beats paper
  // Paper beats rock
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
  //clear text shadow if it exists
  bumper.style.textShadow = "";

  const computerChoice = getComputerChoice(choices);
  const playerChoice = e.target.id;
  const outcome = compareChoices(computerChoice, playerChoice);
  console.log(computerChoice);

  // Determine outcome
  switch (outcome) {
    case "tie":
      ties = ties + 1;
      currentScores[1] = ties;
      updateScoreDisplay();
      bumper.textContent = "The computer chose " + computerChoice.toUpperCase();
      break;
    case "player":
      playerWins = playerWins + 1;
      currentScores[0] = playerWins;
      updateScoreDisplay();
      bumper.textContent = "The computer chose " + computerChoice.toUpperCase();
      // console.log("Player Wins: " + playerWins);
      if (playerWins === 5 && computerWins < 5) {
        // set player win state
        // console.log("Player Wins!");
        currentScores = resetScores();
        bumper.textContent = "You won the last battle!";
        bumper.style.textShadow =
          "2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)";
        updateScoreDisplay();
      }
      break;
    case "computer":
      computerWins = computerWins + 1;
      currentScores[2] = computerWins;
      updateScoreDisplay();
      bumper.textContent = "The computer chose " + computerChoice.toUpperCase();
      // console.log("Computer Wins: " + computerWins);
      if (playerWins < 5 && computerWins === 5) {
        // set computer win state
        // console.log("Computer Wins!");
        currentScores = resetScores();
        bumper.textContent = "The Computer won the last battle!";
        bumper.style.textShadow =
          "2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)";

        updateScoreDisplay();
      }
      break;
  }
}

function initializeScoreDisplay() {
  row = document.getElementById("scores-row");
  for (let j = 0; j < currentScores.length; j++) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(currentScores[j]);
    // cell[j] = currentScores[j];
    cell.appendChild(cellText);
    row.appendChild(cell);
    scoreTableBody.appendChild(row);
  }
}

function updateScoreDisplay() {
  row = document.getElementById("scores-row");
  cells = Array.from(document.querySelectorAll("td"));
  for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].textContent = currentScores[cell];
  }
}

/*  Page construction logic */
//
//
// body mods
const body = document.body;

// h1
const title = document.getElementById("head-title");
rules = document.createElement("div");
rules.textContent = "(First to 5 wins)";
rules.id = "rules";
title.appendChild(rules);

// titleDiv mods
const scoreBoard = document.createElement("div");
const bumper = document.createElement("div");
const bumperText = document.createTextNode(
  "Click 'Rock', 'Paper' or 'Scissors' to play!"
);
bumper.id = "bumper";
bumper.appendChild(bumperText);
scoreBoard.id = "scoreBoard";
scoreBoard.className = "score";
scoreBoard.appendChild(bumper);

// scoreboard displays as a table
let scoreTable = document.createElement("table");
let scoreTableHeader = scoreTable.createTHead();
let scoreTableHeaderRow = scoreTableHeader.insertRow();
let scoreTableBody = scoreTable.createTBody();
let scoreTablePointsRow = scoreTable.insertRow();
scoreTablePointsRow.id = "scores-row";
scoreTableHeader.appendChild(scoreTableHeaderRow);
scoreTable.appendChild(scoreTableHeader);
scoreTable.appendChild(scoreTableBody);
scoreBoard.appendChild(scoreTable);
scoreTable.style.width = "50%";
scoreTable.style.border = "0px";

// populate table header
tableHeaderText = ["Player Wins", "Ties", "Computer Wins"];
for (let key of tableHeaderText) {
  let th = document.createElement("th");
  let text = document.createTextNode(key);
  th.appendChild(text);
  scoreTableHeaderRow.appendChild(th);
}

// place scoreboard in document
title.after(scoreBoard);
scoreBoard.appendChild(bumper);

// button mods
const buttons = document.querySelectorAll("button");

/* special init - last to run */
//
//
// The score display has to be added last
initializeScoreDisplay();
