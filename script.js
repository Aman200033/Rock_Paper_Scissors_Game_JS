let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let button = document.querySelector(".button");


choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

const playGame = (userChoice)=>{
    console.log("users choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("computers choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //Computer -> scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //Computer -> scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //Computer -> paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
    button.classList.remove("hide");
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win :)");
        msg.innerText = `You Win :) yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        button.classList.remove("hide");
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose, ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";
        button.classList.remove("hide");
    }
};

button.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0; 
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    button.classList.add("hide");
});