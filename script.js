let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let msg = document.querySelector(".msg");
let yourscore = document.querySelector("#your_score");
let compscore = document.querySelector("#comp_score");


let turn = 0;
let countUser = 0;
let countComp = 0;
let userChoice = " ";

rock.addEventListener("click",() => {
    if(turn%2==0){
    console.log("rock was clicked");
    turn++;
    }
    userChoice = "rock";
    computer();
})
paper.addEventListener("click",() => {
    if(turn%2==0){
        console.log("paper was clicked");
        turn++;
    }
    userChoice = "paper";
    computer(); 
})
scissor.addEventListener("click",() => {
    if(turn%2==0){
        console.log("scissor was clicked");
        turn++;
    }
    userChoice = "scissor";
    computer();
})

function computer(){
    const options = ["rock" , "paper" , "scissor"];
    let i = Math.floor(Math.random()*3);
    let comp_choice = options[i];
    
    if(turn%2 != 0){  
        console.log(comp_choice , "was clicked");
        turn++;
    }

    if(userChoice === comp_choice){
        console.log("The game was draw!");
        msg.innerText = "The Game Was Draw!";
        msg.style.backgroundColor = "grey";
        msg.style.color = "white";
        msg.style.fontSize = "33px"
    }

    if(userChoice === "paper" && comp_choice === "scissor"){
        console.log("computer Won :(");
        msg.innerText = `You lose! ${comp_choice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        countComp++;
        compscore.innerText = countComp;
    }
    
    if(userChoice === "rock" && comp_choice === "paper"){
        console.log("Computer Won :(");
        msg.innerText = `You lose! ${comp_choice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        countComp++;
        compscore.innerText = countComp;
    }
    if(userChoice === "scissor" && comp_choice === "rock"){
        console.log("computer Won :(");
        msg.innerText = `You lose! ${comp_choice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        countComp++;
        compscore.innerText = countComp;
    }
    if(userChoice === "scissor" && comp_choice === "paper"){
        console.log("You Won :)");
        msg.innerText = `You Won! ${userChoice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        countUser++;
        yourscore.innerText = countUser;
    }
    if(userChoice === "paper" && comp_choice === "rock"){
        console.log("You Won :)");
        msg.innerText = `You Won! ${userChoice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        countUser++;
        yourscore.innerText = countUser;
    }
    if(userChoice === "rock" && comp_choice === "scissor"){
        console.log("You Won :)");
        msg.innerText =`You Won! ${userChoice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        countUser++;
        yourscore.innerText = countUser;
    }
   
}







