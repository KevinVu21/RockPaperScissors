let computer = 0;
let user = 0;
function getComputerChoice(){
     let num = Math.floor(Math.random() * 3) + 1;
     if(num === 1){
        return "rock";
     }else if(num === 2){
        return "paper";
     }else{
        return "scissor";
     }
}

function getPlayerChoice(){
    let choice = prompt("Pick Rock, Paper, or Scissor");
    choice = choice.toLowerCase();
    if(choice != "rock" && choice != "paper" && choice != "scissor"){
        return getPlayerChoice();
    }
    return choice;
}

function singleRound(playerSelection, computerSelection = getComputerChoice){
    if(playerSelection === computerSelection){
        console.log("You guys picked the same thing! Try again!")
        return singleRound(getPlayerChoice(), getComputerChoice());
    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            ++computer;
            return ("You Lose! Paper beats Rock");
        }else{
            ++user;
            return ("You win!");
        }
    }else if(playerSelection === "scissor"){
        if(computerSelection === "rock"){
            ++computer;
            return ("You lose! Rock beats Scissors")
        }else{
            ++user
            return ("You win!");
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            ++user;
            return ("You win!");
        }else{
            ++computer;
            return ("You lose! Scissors beat Paper");
        }
    }
}


function playGame(){
    while(computer < 5 && user < 5){
        singleRound(getPlayerChoice(), getComputerChoice());
        console.log("You: " + user + "\nComputer: " + computer);
    }
    if(computer === 5){
         return("You lose!");
    }else{
        return ("You win!");
    }
}
rock = document.getElementById('rock');
rock.addEventListener('click', function(){
    console.log(singleRound('rock'));
});

scissor = document.getElementById('scissor');
scissor.addEventListener('click', function(){
    console.log(singleRound('scissor'));
});

paper = document.getElementById('paper');
paper.addEventListener('click', function(){
    console.log(singleRound('paper'));
});

// console.log(singleRound(getPlayerChoice(), getComputerChoice()));
// console.log(playGame());