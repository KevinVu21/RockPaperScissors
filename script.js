let computer = 0;
let user = 0;
userDiv = document.getElementById('user');
userDiv.textContent = "You: " + user

computerDiv = document.getElementById('computer');
computerDiv.textContent = "Computer: " + computer
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

// function getPlayerChoice(){
//     let choice = prompt("Pick Rock, Paper, or Scissor");
//     choice = choice.toLowerCase();
//     if(choice != "rock" && choice != "paper" && choice != "scissor"){
//         return getPlayerChoice();
//     }
//     return choice;
// }

function singleRound(playerSelection, computerSelection = getComputerChoice()){
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            ++computer;
            computerDiv.textContent = "Computer: " + computer

        }else{
            ++user;
            userDiv.textContent = "You: " + user

        }
    }else if(playerSelection === "scissor"){
        if(computerSelection === "rock"){
            ++computer;
            computerDiv.textContent = "Computer: " + computer

        }else{
            ++user
            userDiv.textContent = "You: " + user

        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            ++user;
            userDiv.textContent = "You: " + user

        }else{
            ++computer;
            computerDiv.textContent = "Computer: " + computer

        }
    }
    if(user === 5){
        end("You win :)")
    }
    if(computer === 5){
        end("Computer wins :(")
    }
}


function end(message){
    alert(message);
    user = 0;
    computer = 0;
    userDiv.textContent = "You: " + user
    computerDiv.textContent = "Computer: " + computer
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