const possibleChoices = document.querySelectorAll('button');
const userChoiceDisplay = document.getElementById("your-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const userScoreDisplay = document.getElementById("your-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;
let userChoice ;
let computerChoice ;
let result = 0;


function getComputerChoice(){
   const randomNumber = Math.floor(Math.random() * 3) + 1;
   
   if(randomNumber === 1){
    computerChoice = "rock";
   } else if (randomNumber === 2){
    computerChoice = "paper";
   } else if (randomNumber === 3){
    computerChoice = "scissors";
  }  
}
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    getComputerChoice();
    playRound();
    computerChoiceDisplay.textContent = computerChoice;
    computerScoreDisplay.textContent = computerScore;
    userChoiceDisplay.textContent = userChoice;
    userScoreDisplay.textContent = userScore;
}));

computerScoreDisplay.textContent = computerScore;
userScoreDisplay.textContent = userScore;

function playRound(){
    if(userChoice === computerChoice){
        result += 0;
    } else if (userChoice === "rock" && computerChoice === "paper" ){
        result += (computerScore++);
    } else if (userChoice === "rock" && computerChoice === "scissors"){
        result += (userScore++);
    } else if (userChoice === "paper" && computerChoice === "scissors"){
        result += (computerScore++);
    } else if (userChoice === "paper" && computerChoice === "rock"){
        result += (userScore++);
    } else if (userChoice === "scissors" && computerChoice === "rock"){
        result += (computerScore++);
    } else if (userChoice === "scissors" && computerChoice === "paper"){
        result += (userScore++);
    }
    
    if(userScore === 5){
        announceWinner();
        restartGame();
    } else if (computerScore === 5){
        announceWinner();
        restartGame();
    }
} 
    
function announceWinner(){
    if(userScore === 5){
        alert(" Congrats !" + " You reached 5 points. " + "You won !");
    } else if(computerScore === 5){
        alert(" You lost. "+ "Computer reached 5 points. " + "Better luck next time !");
    }
}


function restartGame(){
    userScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;
    userScoreDisplay.textContent = userScore;

    userChoice = "" ;
    computerChoice = "" ;
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
}







