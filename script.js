//game is initialised 
let computerScore = 0;
let humanScore = 0;
let gamecounter = 1;
let rock = document.querySelector("#rock")
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let humanscore = document.querySelector('.humanScore');
let compscore = document.querySelector('.compScore');
let message = document.querySelector('.message');
let result = document.querySelector('.result');

rock.addEventListener("click", function(e){
    let myChoice = 'rock';
    scoreUpdater();

    if(gamecounter > 5){
        if(humanScore>computerScore){
            let win = `End of game, you won!!! your score was ${humanScore} and the computer's score was ${computerScore}`
            console.log(win);
            messageUpdater(win);
        }else{
            let lose = `End of game, you did not win. your score was ${humanScore} and the computer's score was ${computerScore}`
            console.log(lose);
            messageUpdater(lose);
        }
    }else{
    game(myChoice);    
    }})

    scissors.addEventListener("click", function(e){
        let myChoice = 'scissors';

        if(gamecounter > 5){
            if(humanScore>computerScore){
                let win = `end of game, you won!!! your score was ${humanScore} and the computer's score was ${computerScore}`
                console.log(win);
                messageUpdater(win);
            }else{
                let lose = `end of game, you did not win. your score was ${humanScore} and the computer's score was ${computerScore}`
                console.log(lose);
                messageUpdater(lose);
            }
        }else{
        game(myChoice);    
        }})

    paper.addEventListener("click", function(e){
        let myChoice = 'paper';
        scoreUpdater();
        if(gamecounter > 5){
            if(humanScore>computerScore){
                let win = `end of game, you won!!! your score was ${humanScore} and the computer's score was ${computerScore}`
                console.log(win);
                messageUpdater(win);
            }else{
                let lose = `end of game, you did not win. your score was ${humanScore} and the computer's score was ${computerScore}`
                console.log(lose);
                messageUpdater(lose);
            }
        }else{
        game(myChoice);    
        }})


// It creates a random pick from rock, paper or scissors 
function computerRandomizer(){
let computerChoice = Math.random();
if (computerChoice <= 0.33) {
    let processedComputerChoice = "rock"
        return processedComputerChoice;
    } else if(computerChoice > 0.33 && computerChoice <= 0.66) {
        let processedComputerChoice = "paper"
        return processedComputerChoice;
    } else {
        let processedComputerChoice = "scissors"
        return processedComputerChoice;
    }}
function game(a){
    // It checks that my variable is one of the rock, paper or scissors and throws an error if not 
    if (a == "rock" || a == "paper" || a == "scissors") {
        let correctVariable = `your choice is: ${a}`
        console.log(correctVariable);
        messageUpdater(correctVariable);
        let processedComputerChoice = computerRandomizer();

        // It compares my result against that of the computer’s if the choice is correct      
        if (processedComputerChoice == a) {
            let roundEnd = `end of round ${gamecounter}`;
            let drawResult = `draw! you both chose ${a}`
            messageUpdater(roundEnd);
            resultUpdater(drawResult);
            console.log(drawResult); 
            console.log(roundEnd);
        } else if ((a == "rock" && processedComputerChoice == "paper") || (a == "paper" && processedComputerChoice == "scissors") || (a == "scissors" && processedComputerChoice == "rock")
        ){
            ++computerScore;
            scoreUpdater();
            let roundEnd = `end of round ${gamecounter}`
            let lossResult = `you lost this round. you chose ${a} and the computer chose ${processedComputerChoice}`
            messageUpdater(roundEnd);
            resultUpdater(lossResult);
            console.log(lossResult); 
            console.log(roundEnd);
        } else if ((a == "rock" && processedComputerChoice == "scissors") || (a == "paper" && processedComputerChoice == "rock") || (a == "scissors" && processedComputerChoice == "paper")) 
            {
                ++humanScore;
                scoreUpdater();
            let roundEnd = `end of round ${gamecounter}`
            let winResult = `you won this round! you chose ${a} and the computer chose ${processedComputerChoice}`
                messageUpdater(roundEnd);
                resultUpdater(winResult);
                console.log(winResult);
                console.log(roundEnd);
            }
     else {
        let wrong = `your guess was ${a}, this is not rock, paper or scissors. please try again`
        messageUpdater(wrong);
        console.log(wrong)
    }}
++gamecounter;
    }
function scoreUpdater(){
     //code to remove all of the existing divs so that the new score can be updated 
     if (humanscore) {
        while (humanscore.firstChild) {
          humanscore.removeChild(humanscore.firstChild);
        }}
    
    //code to update the new score 
    let text1 = document.createElement('div');
    text1.textContent= `User: ${humanScore}`;
    humanscore.appendChild(text1);

     //code to remove all of the existing divs so that the new score can be updated 
     if (compscore) {
        while (compscore.firstChild) {
          compscore.removeChild(compscore.firstChild);
        }}
    
    //code to update the new score 
    let text2 = document.createElement('div');
    text2.textContent= `Computer: ${computerScore}`;
    compscore.appendChild(text2);
    }
function messageUpdater(c){
    if (message) {
        while (message.firstChild) {
          message.removeChild(message.firstChild);
        }}
    
    let text3 = document.createElement('div');
    text3.textContent= c;
    message.appendChild(text3);
    }

    function resultUpdater(b){
        if (result) {
            while (result.firstChild) {
              result.removeChild(result.firstChild);
            }}
        
        let text4 = document.createElement('div');
        text4.textContent= b;
        result.appendChild(text4);
        }