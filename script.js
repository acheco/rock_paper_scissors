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

const humanPoints = document.querySelector(".humanScore");
const computerPoints = document.querySelector(".computerScore");

// get the value of the clicked button and sending to the playRound function
const button = document.querySelectorAll("input");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {

        if (humanScore === 5 || computerScore === 5) {
            showWinner(true);
        }else {
            playRound(e.target.value, getComputerChoice());
        }

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

    ++currentRound;
    round.textContent = String(currentRound);

    if (formatedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore = ++humanScore;
        humanPoints.textContent = humanScore;
        return result.textContent = `You win! ${formatedHumanChoice} beat ${computerChoice}!`;
    }

    if (formatedHumanChoice === "scissor" && computerChoice === "paper") {
        humanScore = ++humanScore;
        humanPoints.textContent = humanScore;
        return result.textContent = `You win! ${formatedHumanChoice} beat ${computerChoice}!`;
    }

    if (formatedHumanChoice === "rock" && computerChoice === "scissor") {
        humanScore = ++humanScore;
        humanPoints.textContent = humanScore;
        return result.textContent = `You win! ${formatedHumanChoice} beat ${computerChoice}!`;
    }

    if (formatedHumanChoice === computerChoice) {
        return result.textContent = "It's a tie, try again!";
    }

    computerScore = ++computerScore;
    computerPoints.textContent = computerScore;
    return result.textContent = `You lose! ${computerChoice} beat ${formatedHumanChoice}`;

}

function showWinner(show) {
    if (show) {
        return (humanScore === 5) ? result.textContent = `You win! congrats.` : result.textContent = `The computer Win! you can try again!`
    }

}

const reset = document.querySelector("button");
reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    round.textContent = String(0);
    currentRound = 0;
    humanPoints.textContent = "";
    computerPoints.textContent = "";
})




