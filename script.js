"use strict";

if (confirm("Do you want to fight Grant?")) { //user says yes
  let userName = prompt("Enter your name.");
  const grantName = "Grant the Almighty";
  let userHealth = 40, grantHealth = 10, wins = 0; //needed stats
  let min = 1, max = 2; //range for random damage
  let userWon = false; //boolean for win/loss
  
  while (wins < 3 && userHealth > 0) {
    //Grant's turn
    userHealth -= Math.floor(Math.random() * (max - min + 1)) + min; //number between 1 and 2
    console.log(`${userName} has ${userHealth} health left.`);
    
    if (userHealth <= 0) { //quit with a loss if user is out of health
      userWon = false; //for clarity
      break;
    }
    
    //user's turn
    grantHealth -= Math.floor(Math.random() * (max - min + 1)) + min; //number between 1 and 2
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
  }
  
  //after game is over
  if (userWon) {
    console.log(`${userName} is victorious!`);
  } else {
    console.log(`${userName} has been defeated.`);
  }
  
} else { //user says no
  console.log("OK, see you later.");
}