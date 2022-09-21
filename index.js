
let homeScore = 0
let guestScore = 0

function homeScore1(){
    homeScore += 1
    document.getElementById('home-score').innerHTML = homeScore
}
function homeScore2(){
    homeScore += 2
    document.getElementById('home-score').innerHTML = homeScore
}
function homeScore3(){
    homeScore += 3
    document.getElementById('home-score').innerHTML = homeScore
}
function guestScore1(){
    guestScore += 1
    document.getElementById('guest-score').innerHTML = guestScore
}
function guestScore2(){
    guestScore += 2
    document.getElementById('guest-score').innerHTML = guestScore
}
function guestScore3(){
    guestScore += 3
    document.getElementById('guest-score').innerHTML = guestScore
}
function newGameHome(){
    homeScore = 0
     guestScore = 0
    document.getElementById('home-score').innerHTML = homeScore
    document.getElementById('guest-score').innerHTML = guestScore
}