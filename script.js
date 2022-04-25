//One user: user1 versus the computer: cpu1
//Let user input 'rock' 'paper' 'or scissors'
//make sure lower or upper case works
let user1Input = prompt('Enter rock, paper, or scissors');
user1Input = user1Input.toLocaleLowerCase();

//What to print if user enters an invalid string?

//randomly generate cpu1 selection between rock, paper, or scissors
function computerPlay(){
    let randInt = 0;
    let cpuOutput = 'string';
    randInt = Math.floor(Math.random()*3);
    if (randInt === 0){
        cpuOutput = 'rock';
    }
    else if (randInt === 1){
        cpuOutput = 'paper'; }
    else if (randInt === 2) {
    cpuOutput = 'scissors';}
     return cpuOutput;   

    }
 console.log(computerPlay());
   
//compare user1Input and cpuOutput r > s, s > p, p > r
//print who won