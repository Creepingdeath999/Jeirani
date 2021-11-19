let playerChoise
let computerChoise
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const winnerH1 = document.getElementById('winner')
const computerChoiseElement = document.getElementById('computer-choise')

let image = document.createElement('img')


function setsPlayerChoise(choise) {
    playerChoise = choise
    return playerChoise
}


function setsComputerChoise() {

    let random = Math.random()
    if (random <= 0.33) {
        image.src = "https://i.postimg.cc/htYwPzPq/rock.png"
        computerChoise = 'rock'
    } else if (random <= 0.66) {
        image.src = "https://i.postimg.cc/FHz84gvZ/paper.png"
        computerChoise = 'paper'
    } else {
        image.src = "https://i.postimg.cc/0NJ46kbK/scissors.png"
        computerChoise = 'scissors'
    }
    computerChoiseElement.appendChild(image)
    return computerChoise
}

function winner(pChoice, cChoice) {
    let message
    if (pChoice == cChoice) {
        message = "draw"
    } else if ((cChoice === 'rock' && pChoice === 'paper') ||
        (cChoice === 'paper' && pChoice === 'scissors') ||
        (cChoice === 'scissors' && pChoice === 'rock')) {
        message = "you won"
    } else {
        message = "you Lost"
    }
    winnerH1.innerText = message
}





rock.addEventListener('click', () => {
    setsPlayerChoise('rock')
    setsComputerChoise()
    winner(playerChoise, computerChoise)
})
paper.addEventListener('click', () => {
    setsPlayerChoise('paper')
    setsComputerChoise()
    winner(playerChoise, computerChoise)
})
scissors.addEventListener('click', () => {
    setsPlayerChoise('scissors')
    setsComputerChoise()
    winner(playerChoise, computerChoise)
})
