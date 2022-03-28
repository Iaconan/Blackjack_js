let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""



if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You are out of the game!"
    isAlive = false
}

//Cash Out
// console.log("hasBlackJack: " + hasBlackJack)
// console.log("Is alive: " + isAlive)


// Log it out
console.log(message)


