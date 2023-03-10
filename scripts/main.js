const selectionButtons = document.querySelectorAll('[data-selection]');
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },

    {
        name:'paper',
        emoji: '✋',
        beats: 'rock'
    },

    {
        name:'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const playerWinner = decideWinner(selection, computerSelection)
    const computerWinner = decideWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, playerWinner)
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function decideWinner(selection, computerSelection){
    return selection.beats === computerSelection.name
}

function addSelectionResult(selection, winner){

}