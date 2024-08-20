const items = [
    "rock",
    "paper",
    "scissor"
];

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

// get the element to show the current round.
const round = document.querySelector("span");
round.textContent = String(currentRound);

// get the value of the clicked button and sending to the playRound function
const button = document.querySelectorAll("input");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {

        playRound(e.target.value, getComputerChoice());

    });
}

// Get the element to show the result of each round
const result = document.querySelector(".result");

function getComputerChoice() {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}

function playRound(humanChoice, computerChoice) {
    let formatedHumanChoice = humanChoice.toLowerCase();

   if (showWinner()){
       return;
   }

    ++currentRound;
    round.textContent = String(currentRound);

    if (formatedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore = ++humanScore;
        console.log(humanScore);
        return result.textContent = `You win! ${formatedHumanChoice} beat ${computerChoice}!`;
    }

    if (formatedHumanChoice === "scissor" && computerChoice === "paper") {
        humanScore = ++humanScore;
        console.log(humanScore);
        return result.textContent = `You win! ${formatedHumanChoice} beat ${computerChoice}!`;
    }

    if (formatedHumanChoice === "rock" && computerChoice === "scissor") {
        humanScore = ++humanScore;
        console.log(humanScore);
        return result.textContent = `You win! ${formatedHumanChoice} beat ${computerChoice}!`;
    }

    if (formatedHumanChoice === computerChoice) {
        return result.textContent = "It's a tie, try again!";
    }

    computerScore = ++computerScore;
    console.log(computerScore);
    return result.textContent = `You lose! ${computerChoice} beat ${formatedHumanChoice}`;

}

function showWinner(){
    if (humanScore === 5){
      return result.textContent = `You win! your final score is ${humanScore}`;
    }

    if(computerScore === 5){
      return result.textContent = `You lose! your final score is ${humanScore}`;
    }

}

const reset = document.querySelector("button");
reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    round.textContent = String(0);
})




