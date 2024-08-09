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

        if (formatedHumanChoice === "rock" && computerChoice === "paper") {
            computerScore = ++computerScore;
            return console.log("You lose! Paper beat Rock");
        }

        if (formatedHumanChoice === "paper" && computerChoice === "scissor") {
            computerScore = ++computerScore;
            return console.log("You lose! Scissor beat Paper");
        }

        if (formatedHumanChoice === "scissor" && computerChoice === "rock") {
            computerScore = ++computerScore;
            return console.log("You lose! Rock beat Scissor");
        }

        if (formatedHumanChoice === "paper" && computerChoice === "rock") {
            humanScore = ++humanScore;
            return console.log("You win! Paper beat Rock");
        }

        if (formatedHumanChoice === "scissor" && computerChoice === "paper") {
            humanScore += ++humanScore;
        }

        if (formatedHumanChoice === "rock" && computerChoice === "scissor") {
            humanScore = ++humanScore;
            return console.log("You win! Rock beat scissor");
        }

        return console.log("It's a tie, try again!");

    }

    for (let i = 5; i > 0; i--) {
        currentRound = ++currentRound
        console.log(`Round number ${currentRound}`)
        playRound(getHumanChoice(), getComputerChoice());

    }

    if (humanScore > computerScore) {
        return console.log(`You win! your final score is ${humanScore}`)
    } else {
        return console.log(`You lose! computer score is ${computerScore}`)
    }

}

playGame();


