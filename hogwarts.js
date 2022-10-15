//defining the variables needed to make the counter work
let griffindor = 0
let slytherin = 0
let hufflepuff = 0
let ravenclaw = 0

let griffindorPoints = document.getElementById("griffindor-points")
let slytherinPoints = document.getElementById("slytherin-points")
let hufflepuffPoints = document.getElementById("hufflepuff-points")
let ravenclawPoints = document.getElementById("ravenclaw-points")
let housecupWinner = document.getElementById("housecup-winner")

// functions that make the counter work
function addGriff(point){
    griffindor += point
    griffindorPoints.textContent = griffindor
}

function takeGriff(point) {
    griffindor -= point
    griffindorPoints.textContent = griffindor
}

function addSlyth(point){
    slytherin += point
    slytherinPoints.textContent = slytherin
}

function takeSlyth(point){
    slytherin -= point
    slytherinPoints.textContent = slytherin
}

function addHuff(point) {
    hufflepuff += point
    hufflepuffPoints.textContent = hufflepuff
}

function takeHuff(point) {
    hufflepuff -= point
    hufflepuffPoints.textContent = hufflepuff
}

function addRav(point){
    ravenclaw += point
    ravenclawPoints.textContent = ravenclaw
} 

function takeRav(point){
    ravenclaw -= point
    ravenclawPoints.textContent = ravenclaw
}

// functions that decide the winner and reset the score

function endCounting() {
    if (griffindor > slytherin) {
        if (griffindor > hufflepuff) {
            if (griffindor > ravenclaw) {
                housecupWinner.textContent = "GRIFFINDOR IS THE WINNER THIS YEAR"
             
            } else if (ravenclaw > hufflepuff) {
                if (ravenclaw > slytherin) {
                    housecupWinner.textContent = "RAVENCLAW IS THE WINNER THIS YEAR"
                
                }
            }
        } else if (hufflepuff > slytherin) {
            if (hufflepuff > ravenclaw) {
                housecupWinner.textContent = "HUFFLEPUFF IS THE WINNER THIS YEAR"
            
            }
        }
    } else if (slytherin > hufflepuff) {
        if (slytherin > ravenclaw) {
            housecupWinner.textContent = "SLYTHERIN IS THE WINNER THIS YEAR"
        
        }
    }
}

function startCounting() {
    griffindor = 0
    slytherin = 0
    hufflepuff = 0
    ravenclaw = 0
    griffindorPoints.textContent = 0
    slytherinPoints.textContent = 0
    hufflepuffPoints.textContent = 0
    ravenclawPoints.textContent = 0
    housecupWinner.textContent = ""
}