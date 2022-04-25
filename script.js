//One user: user1 versus the computer: cpu1
//Let user input 'rock' 'paper' 'or scissors'
//make sure lower or upper case && spaces before/after works
function userSelection(){
let user1Input = prompt('Enter rock, paper, or scissors');
user1Input = user1Input.trim().toLocaleLowerCase();
if (user1Input == 'rock' || 
    user1Input === 'paper' ||
    user1Input == 'scissors'){
return user1Input}
//What to print if user enters an invalid string?
else return console.log('Try again');
}
console.log(userSelection());


//randomly generate cpu1 selection between rock, paper, or scissors
function computerSelection(){
    let randInt = 0;
    let cpuOutput = 'string';
    randInt = Math.floor(Math.random()*3);
    if (randInt === 0){
        cpuOutput = 'rock';
    }
    else if (randInt === 1){
        cpuOutput = 'paper'; 
    }
    else if (randInt === 2) {
    cpuOutput = 'scissors';
    }
     return cpuOutput;   

    }
 console.log(computerSelection());
   
//compare user1Input and cpuOutput r > s, s > p, p > r
//print who won
function readySetGo(userSelection,computerSelection){
   //options  if user wins
    if ((userSelection === 'rock' 
        && computerSelection === 'scissors') ||
        (userSelection === 'scissors' 
        && computerSelection === 'paper') ||
        (userSelection === 'paper' 
        && computerSelection === 'rock')){
        return ('You win!' /*${userSelection} beats ${computerSelection}'*/);
    }
    //if user loses to cpu
    else if ((computerSelection === 'rock' 
    && userSelection === 'scissors') ||
    (computerSelection === 'scissors' 
    && userSelection === 'paper') ||
    (computerSelection === 'paper' 
    && userSelection === 'rock')){
    return ('You lose!' /*${userSelection} beats ${computerSelection}'*/);
}
    else {return 'tie!';}
    } console.log(readySetGo());