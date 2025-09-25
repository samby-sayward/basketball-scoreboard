let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hPoints = 0
let gPoints = 0

function home1() {
  hPoints += 1
  homeScore.textContent = hPoints
}

function home2() {
  hPoints += 2
  homeScore.textContent = hPoints
}

function home3() {
  hPoints += 3
  homeScore.textContent = hPoints
}

function guest1() {
  gPoints += 1
  guestScore.textContent = gPoints
}

function guest2() {
  gPoints += 2
  guestScore.textContent = gPoints
}

function guest3() {
  gPoints += 3
  guestScore.textContent = gPoints
}

function newGame() {
  hPoints = 0
  gPoints = 0
  homeScore.textContent = hPoints
  guestScore.textContent = gPoints
}

window.increment = increment
window.save = save
window.reset = reset
