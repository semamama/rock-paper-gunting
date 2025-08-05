let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  let computerChoice = "";

  if (random === 1) {
    computerChoice = "water";
  } else if (random === 2) {
    computerChoice = "fire";
  } else {
    computerChoice = "grass";
  }

  return computerChoice;
}

function getHumanChoice(choice = "water") {
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("mirror match cray");
  } else if (
    (humanChoice === "fire" && computerChoice === "grass") ||
    (humanChoice === "grass" && computerChoice === "water") ||
    (humanChoice === "water" && computerChoice === "fire")
  ) {
    console.log("You win boo!");
  } else {
    console.log("get good");
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
