const choice = Math.round(Math.random() * 100 );
//const playerSelection = prompt("Make your choice!").toLowerCase();
const computerSelection = getComputerChoice();


function getComputerChoice() {
if (choice <= 33 ) {
    return "Rock" 

} else if (choice > 33 && choice <= 66){
    return "Paper"

} else if (choice > 66 && choice <= 99) {
    return "Scissors"

} else {
    console.log("something is wrong :(")
}

}



function playRound(playerSelection , computerSelection) {
    
    if(playerSelection === "rock" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock."
    
    } else if(playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock."
    
    } else if(playerSelection === "rock" && computerSelection === "Scissors"){
        return " You win! Rock beats Scissors."
    
    } else if(playerSelection === "scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors."
    
    } else if(playerSelection === "rock" && computerSelection === "Rock"){
        return "Oh! That's draw!"
    
    } else if(playerSelection === "paper" && computerSelection === "Paper"){
        return "Oh! That's draw!"
    
    } else if(playerSelection === "scissors" && computerSelection === "Scissors"){
        return "Oh! That's draw!"
    
    } else if(playerSelection === "paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beat Paper."
    
    } else if(playerSelection === "scissors" && computerSelection === "Paper"){
        return "You win! Scissors beat Paper."
    
    } else {
        return "Oops! Something went wrong :("
    }
}

console.log(playRound(playerSelection,computerSelection));

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection,computerSelection));
    }
}

