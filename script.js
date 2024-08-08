const items = [
    "rock",
    "paper",
    "scissor"
]

function getComputerChoice() {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}

