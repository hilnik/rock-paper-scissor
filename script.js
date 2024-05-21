//game is initialised 
console.log("enter \"game()\" to begin");
let computerScore = 0;
let humanScore = 0;
let gamecounter = 0;

//while loop for repeats of the game 
while (gamecounter <= 5){

// Computer asks for my input 
let myChoice = prompt("what is your choice: rock, scissors or paper?");

// It converts the variable to lowercase 
processedUserChoice = myChoice.toLowerCase()

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
        return processedComputerChoice;}}

    // It checks that my variable is one of the rock, paper or scissors and throws an error if not 
    if (processedUserChoice == "rock" || processedUserChoice == "paper" || processedUserChoice == "scissors") {
        console.log(`your choice is: ${processedUserChoice}`);
        let processedComputerChoice = computerRandomizer();

        // It compares my result against that of the computer’s        
        if (processedComputerChoice == processedUserChoice) {
            console.log(`draw! you both chose ${processedUserChoice}`) 
            ++gamecounter;
            console.log(`end of round ${gamecounter}, user: ${humanScore} vs computer: ${computerScore}`);
        } else if ((processedUserChoice == "rock" && processedComputerChoice == "paper") || (processedUserChoice == "paper" && processedComputerChoice == "scissors") || (processedUserChoice == "scissors" && processedComputerChoice == "rock")
        ){
            console.log(`you lost this round. you chose ${processedUserChoice} and the computer chose ${processedComputerChoice}`);
             ++gamecounter;
             ++computerScore;
             console.log(`end of round ${gamecounter}, user: ${humanScore} vs computer: ${computerScore}`);

        } else if ((processedUserChoice == "rock" && processedComputerChoice == "scissors") || (processedUserChoice == "paper" && processedComputerChoice == "rock") || (processedUserChoice == "scissors" && processedComputerChoice == "paper")) 
            {
                console.log(`you won this round! you chose ${processedUserChoice} and the computer chose ${processedComputerChoice}`);
                ++gamecounter;
                ++humanScore;
                console.log(`end of round ${gamecounter}, user: ${humanScore} vs computer: ${computerScore}`);
            }
     else {
        console.log(`your guess was ${processedUserChoice}, this is not rock, paper or scissors. please try again`)
    }}}

if(humanScore>computerScore){
    console.log(`end of game, you won!!! your score was ${humanScore} and the computer's score was ${computerScore}`)

} else {
    console.log(`end of game, you did not win. your score was ${humanScore} and the computer's score was ${computerScore}`)
}

// 	if my result is the same as the computer it throws a draw message and calls a draw function
// 	if my result loses (rock against paper, scissors against rock, paper against scissors), it calls a lose function and throws a lose message 
// 	if my result wins (rock against scissors, scissors against paper, paper against rock) it calls a win function and throws a win message 
// If winning, the score is added to a variable for me
// If losing, the score is added to a variable for the computer 
// This is repeated 5 times 
// At the end, the scores are checked and if mine wins, a win message comes up, if the computer wins then the computer message comes up 
