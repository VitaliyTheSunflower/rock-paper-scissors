const possibleChoices = document.querySelectorAll('button');
const playerChoiceDisplay = document.getElementById("your-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
let userChoice ;
let computerChoice ;


function getComputerChoice(){
   const randomNumber = Math.floor(Math.random() * 3);
   
   if(randomNumber === 0){
    computerChoice = "rock";
   } else if (randomNumber === 1){
    computerChoice = "paper";
   } else if (randomNumber === 2){
    computerChoice = "scissors";
  }

  computerChoiceDisplay.textContent = computerChoice;
}
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        playerChoiceDisplay.textContent = userChoice;
        getComputerChoice();
    }));

    


