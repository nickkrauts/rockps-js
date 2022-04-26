let userScore = 0;
let cpuScore = 0;
let tieScore = 0;

//One user: user1 versus the computer: cpu1
//Let user input 'rock' 'paper' 'or scissors'
//make sure lower or upper case && spaces before/after works
function userChoice(userMove) {
    userMove = prompt('Please enter rock, paper, or scissors')
    userMove = userMove.trim().toLowerCase();
    //what to do if user input something other than RPS
    return userMove;
  }


//randomly generate cpu1 selection between rock, paper, or scissors
//every time I'm calling this function, I get a new random number. I need a constant
function cpuChoice(cpuMove) {
    cpuMove = '';
    let randInt = Math.floor(Math.random() * 3);
    if (randInt == 0){cpuMove = 'rock';}
    else if (randInt == 1){cpuMove = 'paper';}
    else {cpuMove = 'scissors';}
    return cpuMove;
  }
   
//compare user1Input and cpuOutput r > s, s > p, p > r
//print who won
function compareChoice(userMove,cpuMove){
    cpuMove = cpuChoice();
    userMove = userChoice();
  
    if (cpuMove === userMove) {
    result = "tie";
  }
  //options if user wins r > s, s > p, p > r
  else if (userMove == 'rock' && cpuMove == 'scissors') {
    result = 'win';
  }
  else if (userMove == 'scissors' && cpuMove == 'paper') {
    result = 'win';
  }
  else if (userMove == 'paper' && cpuMove == 'rock') {
    result = 'win';
  }
  else {result = 'lose';}
  return(result);
  }

  function rounds(){
    for (let i = 0; i < 5; i++){
      let outcome = compareChoice();
      if (outcome === 'win') {
        console.log('you win!');
        userScore++;}
      else if (outcome === 'lose') {
        console.log('you lose!');
        cpuScore++;}
      else {tieScore++;
           console.log('you tied!');}
    }
  return['you won ' + userScore, 'lost '+ cpuScore, 'and tied ' + tieScore]}
    
  