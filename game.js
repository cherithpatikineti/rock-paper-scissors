let userScore=0;
let compScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const user_score=document.querySelector('#user-score');
const comp_score=document.querySelector('#comp-score');

const genCompChoice=()=>{
    let elements=["rock","paper","scissors"];
    let n=Math.floor(Math.random()*3);
    return elements[n];
}
const drawGame=(compChoice)=>{
    console.log('Game was draw')
    msg.innerText=`Game was draw!Both have selected ${compChoice}.`;
    msg.style.backgroundColor='gold';
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user_score.innerText=userScore;
        msg.innerText=`You have Won! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor='green';

    } else{
        compScore++;
        comp_score.innerText=compScore;
        msg.innerText=`You have Lost! ${compChoice} beats yours ${userChoice}.`;
        msg.style.backgroundColor='red';

    }
}
const playGame=(userChoice)=>{
    console.log("Users choice :",userChoice);
    const compChoice=genCompChoice();
    console.log("Computers choice :",compChoice);
    if(userChoice===compChoice){
        drawGame(compChoice);
    } else{
        let userWin=true;
        if(userChoice==='rock'){
            if(compChoice!=='scissors')
             userWin=false;
        }
        else if(userChoice==='paper'){
            if(compChoice==='scissors')
            userWin=false;
        } else{
            if(compChoice==='rock')
                userWin=false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    })
})