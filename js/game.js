const choice = Math.round(Math.random() * 100 );

function getComputerChoice() {
if (choice <= 33 ) {
    console.log("rock") 
} else if (choice > 33 && choice <= 66){
    console.log("paper")
} else if (choice > 66 && choice <= 99) {
    console.log("scissors")
} else {
    console.log("something is wrong :(")
}

}

function playRound(playerSelection , computerSelection) {

}

