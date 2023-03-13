let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let homePoints = 0
let guestPoints = 0


function homeOne() {
    homePoints += 1
    homeScore.innerText = homePoints
}

function homeTwo() {
    homePoints += 2
    homeScore.innerText = homePoints
}

function homeThree() {
    homePoints += 3
    homeScore.innerText = homePoints
}

function guestOne() {
    guestPoints += 1
    guestScore.innerText = guestPoints
}

function guestTwo() {
    guestPoints += 2
    guestScore.innerText = guestPoints
}

function guestThree() {
    guestPoints += 3
    guestScore.innerText = guestPoints
}

function newGame() {
    homeScore.innerText = 0
    guestScore.innerText = 0
    homePoints = 0
    guestPoints = 0
}