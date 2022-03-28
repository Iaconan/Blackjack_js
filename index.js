// let firstName = "Vincenzo"
// let surname = "Iacona"

// let fullname = firstName + " " + surname

// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there, "

// function log() {
//     myGreeting = greeting + name + "!"
//     console.log(myGreeting)
// }

// log()

// let myPoints = 3

// function add3Points() {
//     myPoints = myPoints + 3
// }


// function remove1Point() {
// myPoints = myPoints - 1
// }


// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()



// console.log(myPoints)

// let errorEvent = document.getElementById("error")
// console.log(errorEvent)


// function purchase() {
    
//     console.log("button clicked")
//     errorEvent.textContent = "Something went wrong, please try again"
// }

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let total = document.getElementById("total-el")

function add() {
    let result = num1 + num2
    total.textContent = "Total: " + result

}

function subtract() {
    let result = num1 - num2
    total.textContent = "Total: " + result

}

function divide() {
    let result = num1 / num2
    total.textContent = "Total: " + result

}

function multiply() {
    let result = num1 * num2
    total.textContent = "Total: " + result

}

