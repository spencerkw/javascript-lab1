"use strict";

//define constants
const grantName = "Grant the Almighty";
const minDamage = 1, maxDamage = 5; //range for random damage

//define variables
let userName = null;
let userHealth = 40, grantHealth = 10, wins = 0; //needed stats
let userWon = false; //boolean for win/loss

//function run to start the game when the page loads
function startGame() {
  if (confirm("Do you want to fight Grant?")) {
    userName = prompt("Enter your name.", "Kiryu");
    startCombat();
  } else {
    console.log("OK, see you later.");
  }
}

//function to get the random damage value
function getDamage() {
  return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
}

//main game function
function startCombat() {
  let userAction = prompt("Would you like to attack or quit?", "attack");

  while (userAction === "attack") {
    //Grant's turn
    userHealth -= getDamage(); //number between 1 and 2
    console.log(`${userName} has ${userHealth} health left.`);

    if (userHealth <= 0) { //quit with a loss if user is out of health
      userWon = false; //for clarity
      break;
    }

    //user's turn
    grantHealth -= getDamage(); //number between 1 and 2
    console.log(`${grantName} has ${grantHealth} health left.`);

    if (grantHealth <= 0) { //if Grant is out of health
      wins++; //add a win
      grantHealth = 10; //reset Grant's health
      console.log(`${userName} has defeated ${grantName} ${wins} time(s)!`);
    }
    if (wins >= 3) { //quit with a win when Grant has been beaten 3 times
      userWon = true;
      break;
    }

    userAction = prompt("Would you like to attack or quit?", "attack");
  }

  //after game is over
  if (userWon) {
    console.log(`${userName} is victorious!`);
  } else {
    console.log(`${userName} has been defeated.`);
  }

  return;
}

//when page loads, start the game
startGame();