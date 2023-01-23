function getPlayerSelection() {
}

function getComputerSelection() {
    const selection = (Math.floor(Math.random() * 3));

    switch (selection){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }

}

function playRound(playerSelection, computerSelection) {
    const result = null;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
    }
}

const playerSelection = "rock";
const computerSelection = getComputerSelection();
console.log(playRound(playerSelection, computerSelection));

