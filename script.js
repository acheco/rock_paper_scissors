const items = [
    "rock",
    "paper",
    "scissor"
]

function getComputerChoice() {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}

function getHumanChoice() {
    return prompt("please input your choice: ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 0;

    function playRound(humanChoice, computerChoice) {
        let formatedHumanChoice = humanChoice.toLowerCase();

        if (formatedHumanChoice === "paper" && computerChoice === "rock") {
            humanScore = ++humanScore;
            return console.log(`You win! ${formatedHumanChoice} beat ${computerChoice}!`);
        }

        if (formatedHumanChoice === "scissor" && computerChoice === "paper") {
            humanScore = ++humanScore;
            return console.log(`You win! ${formatedHumanChoice} beat ${computerChoice}!`);
        }

        if (formatedHumanChoice === "rock" && computerChoice === "scissor") {
            humanScore = ++humanScore;
            return console.log(`You win! ${formatedHumanChoice} beat ${computerChoice}!`);
        }

        if (formatedHumanChoice === computerChoice) {
            return console.log("It's a tie, try again!");
        }

        computerScore = ++computerScore;
        return console.log(`You lose! ${computerChoice} beat ${formatedHumanChoice}`);

    }

    for (let i = 5; i > 0; i--) {
        currentRound = ++currentRound
        console.log(`Round number ${currentRound}`)
        playRound(getHumanChoice(), getComputerChoice());

    }

    if (humanScore > computerScore) {
        return console.log(`You win! your final score is ${humanScore}`)
    } else if (computerScore > humanScore) {
        return console.log(`You lose! computer score is ${computerScore} and you only have ${humanScore}`);
    } else {
        return console.log(`It´s a tie! computer score is ${computerScore} and you have ${humanScore}`);
    }

}

playGame();


