let player = {
     name : "Vincenzo",
     chips : 150

}


let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");




playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    
    if (random > 10) {
        return 10
    } else if (random === 1 ) {
        return 11
    } else {
        return random
    }
}


function startGame() {
    isAlive = true
    let firstCard =  getRandomCard();
    let secondCard =  getRandomCard();
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard;
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "  "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    

    // console.log(message)
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let nextCard =  getRandomCard()
        sum += nextCard
        cards.push(nextCard)
        console.log(cards)
        renderGame()
        
    }
}



//Cash Out
// console.log("hasBlackJack: " + hasBlackJack)
// console.log("Is alive: " + isAlive)


// Log it out




