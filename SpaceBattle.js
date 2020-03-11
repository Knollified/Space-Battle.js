//Used npm install prompts in order to create this game using prompts in the terminal.
const prompts = require('prompts');


//These are the ships Both the users ship and the alien ships.
//Hull is the ships health
//FirePower is how much damage the ship does.
//Accuracy is to see if a ship hits or not. Ships hit when accuracy is <= .8 && >= .6. If it goes over .8 it is a miss. if it is less than .6 it is also a miss.

let userShip = {
    hull: 25,
    firePower: 5,
    accuracy: 0.7
}
let fighterShip1 = {
    hull: Math.floor(Math.random() * 3 + 3.5),
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5),
    accuracy: Math.random()
}
let fighterShip2 = {
    hull: Math.floor(Math.random() * 3 + 3.5),
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5),
    accuracy: Math.random()
}
let fighterShip3 = {
    hull: Math.floor(Math.random() * 3 + 3.5),
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5),
    accuracy: Math.random()
}
let fighterShip4 = {
    hull: Math.floor(Math.random() * 3 + 3.5),
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5),
    accuracy: Math.random()
}
let fighterShip5 = {
    hull: Math.floor(Math.random() * 3 + 3.5),
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5),
    accuracy: Math.random()
}
let fighterShip6 = {
    hull: Math.floor(Math.random() * 3 + 3.5),
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5),
    accuracy: Math.random()
}
let fighterShip7 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 2,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 2 - 2,
    accuracy: Math.random()
}
let fighterShip8 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 2,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 2 - 2,
    accuracy: Math.random()
}
let fighterShip9 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 2,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 2 - 2,
    accuracy: Math.random()
}
let fighterShip10 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 2,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 2 -2,
    accuracy: Math.random()
}
let fighterShip11 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 2,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 2 - 2,
    accuracy: Math.random()
}
let fighterShip12 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 3,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 2 - 1,
    accuracy: Math.random()
}
let fighterShip13 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 3,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 3 - 3,
    accuracy: Math.random()
}
let fighterShip14 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 3,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 3 - 3,
    accuracy: Math.random()
}
let fighterShip15 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 3,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 3 - 3,
    accuracy: Math.random()
}
let fighterShip16 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 3,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 3 - 3,
    accuracy: Math.random()
}
let fighterShip17 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 3,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 3 - 3,
    accuracy: Math.random()
}
let fighterShip18 = {
    hull: Math.floor(Math.random() * 3 + 3.5) * 4,
    firePower: Math.floor(Math.random() * (4 - 2) + 2.5) * 3 - 2,
    accuracy: Math.random()
}

//When a ship dies they go into this array and all dead ships are displayed after every round is complete.
let deadShips = [];

//This is the function that ends the game and terminates the process without closing he terminal.
let endGame = () =>{
    console.clear();
    console.log('Game Over The earth has been destroyed!');
    process.exit(1);
}

//This is the game itself
let startGame = () =>{
//First prompt to start the game after the startGame function is called
    (async () => {
  const response = await prompts({
    type: 'text',
    name: 'game',
    message: 'Start Game?',
    validate: game => game === 'start'
  });
  console.clear();
  console.log('Game Starting');
//First Attack Prompt to attack the alien ship 1
  (async () => {
    const response = await prompts({
      type: 'text',
      name: 'attack',
      message: 'Attack?',
      validate: attack => attack === 'attack'
    });
//Below is the basic checks and fighting mechanics between the user and the alien ship. This code is used for every ship.
//When attacking the game logs the action as well as all the events that take place in a round. After the round is over the next round will start.
    console.log('Attacking Ship 1');

    for(fighterShip1.hull; fighterShip1.hull > 0; fighterShip1.hull + 0){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip1.hull = fighterShip1.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip1.hull);
            }
        if(fighterShip1.hull > 0) {
            if(fighterShip1.accuracy <= .8 && fighterShip1.accuracy >= .6) {
                userShip.hull = userShip.hull - fighterShip1.firePower;
                console.log("You've Been Hit For " + fighterShip1.firePower)
            }else {
                console.log("Enemy Attack missed");
            }
        }else{
            deadShips.push('Fighter Ship 1');
            console.log('Dead Ships: ' + deadShips);
            console.log("ship 1 Destroyed");
            console.log('Your Hull = ' + userShip.hull);
        }
        }else{
            endGame();
        }
}
//Attack  or retreat Prompt to attack the alien ship 2 or force a game over
(async () => {
    const response = await prompts({
      type: 'text',
      name: 'attack',
      message: 'Attack or Retreat?',
      validate: attack => attack === 'attack',
      validate: attack => attack === 'retreat' ?  endGame(): true
    });
    console.log('Attacking Ship 2');

    for(fighterShip2.hull; fighterShip2.hull > 0; fighterShip2.hull + 0){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip2.hull = fighterShip2.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip2.hull);
            }

            if(fighterShip2.hull > 0) {
                if(fighterShip2.accuracy <= .8 && fighterShip2.accuracy >= .6) {
                    userShip.hull = userShip.hull - fighterShip2.firePower;
                    console.log("You've Been Hit For " + fighterShip2.firePower);
            }else {
                console.log("Enemy Attack missed");
            }
            }else{
                deadShips.push('Fighter Ship 2');
                console.log('Dead Ships: ' + deadShips);
                console.log("ship 2 Destroyed");
                console.log('Your Hull = ' + userShip.hull);
            }
        }else{
            endGame();
        }
    }
//Attack  or retreat Prompt to attack the alien ship 3 or force a game over
(async () => {
    const response = await prompts({
        type: 'text',
        name: 'attack',
        message: 'Attack or Retreat?',
        validate: attack => attack === 'attack',
        validate: attack => attack === 'retreat' ?  endGame(): true
    });
    console.log('Attacking Ship 3');

    for(fighterShip3.hull; fighterShip3.hull > 0; fighterShip3.hull + 0){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip3.hull = fighterShip3.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip3.hull);
            }

            if(fighterShip3.hull > 0) {
                if(fighterShip3.accuracy <= .8 && fighterShip3.accuracy >= .6) {
                userShip.hull = userShip.hull - fighterShip3.firePower;
                console.log("You've Been Hit For " + fighterShip3.firePower);
            }else{
                console.log("Enemy Attack missed");
            }
            }else{
                deadShips.push('Fighter Ship 3');
                console.log('Dead Ships: ' + deadShips);
                console.log("ship 3 Destroyed");
                console.log('Your Hull = ' + userShip.hull);
                console.log('Hull Has gained 3 hp')
                console.log('Fire Power +1')
                userShip.hull = userShip.hull + 3;
                userShip.firePower = userShip.firePower + 1;
            }
        }else{
            endGame();
        }
    }
//Attack  or retreat Prompt to attack the alien ship 4 or force a game over
(async () => {
    const response = await prompts({
        type: 'text',
        name: 'attack',
        message: 'Attack or Retreat?',
        validate: attack => attack === 'attack',
        validate: attack => attack === 'retreat' ?  endGame(): true
    });

    console.log('Attacking Ship 4');

    for(fighterShip4.hull; fighterShip4.hull > 0; fighterShip4.hull + 0){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip4.hull = fighterShip4.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip4.hull);
            }

            if(fighterShip4.hull > 0) {
                if(fighterShip4.accuracy <= .8 && fighterShip4.accuracy >= .6) {
                    userShip.hull = userShip.hull - fighterShip4.firePower;
                    console.log("You've Been Hit For " + fighterShip4.firePower);
                }else{
                    console.log("Enemy Attack missed");
                }
            }else{
                deadShips.push('Fighter Ship 4');
                console.log('Dead Ships: ' + deadShips);
                console.log("ship 4 Destroyed");
                console.log('Your Hull = ' + userShip.hull);
            }
        }else{
            endGame();
        }
    }
//Attack  or retreat Prompt to attack the alien ship 5 or force a game over
(async () => {
    const response = await prompts({
        type: 'text',
        name: 'attack',
        message: 'Attack or Retreat?',
        validate: attack => attack === 'attack',
        validate: attack => attack === 'retreat' ?  endGame(): true
    });
    console.log('Attacking Ship 5');

    for(fighterShip5.hull; fighterShip5.hull > 0; fighterShip5.hull + 0){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip5.hull = fighterShip5.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip5.hull);
            }

            if(fighterShip5.hull > 0) {
                if(fighterShip5.accuracy <= .8 && fighterShip5.accuracy >= .6) {
                    userShip.hull = userShip.hull - fighterShip5.firePower;
                    console.log("You've Been Hit For " + fighterShip5.firePower);
                }else {
                    console.log("Enemy Attack missed");
                }
            }else{
                deadShips.push('Fighter Ship 5');
                console.log('Dead Ships: ' + deadShips);
                console.log("ship 5 Destroyed");
                console.log('Your Hull = ' + userShip.hull);
            }
        }else{
            endGame();
        }
    }
//Attack  or retreat Prompt to attack the alien ship 6 or force a game over
(async () => {
    const response = await prompts({
        type: 'text',
      name: 'attack',
      message: 'Attack or Retreat?',
      validate: attack => attack === 'attack',
      validate: attack => attack === 'retreat' ?  endGame(): true
    });
    console.log('Attacking Ship 6');

    for(fighterShip6.hull; fighterShip6.hull > 0; fighterShip6.hull + 0){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip6.hull = fighterShip6.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip6.hull);
            }

            if(fighterShip6.hull > 0) {
                if(fighterShip6.accuracy < 1) {
                    userShip.hull = userShip.hull - fighterShip6.firePower;
                    console.log("You've Been Hit For " + fighterShip6.firePower);
                }else {
                    console.log("Enemy Attack missed");
                }
            }else{
                deadShips.push('Fighter Ship 6');
                console.log('Dead Ships: ' + deadShips);
                console.log("ship 6 Destroyed");
                console.log('Your Hull = ' + userShip.hull);
                console.log('Wave 1 Destroyed');
                console.log('Hull Has gained 10 hp')
                console.log('Fire Power +1')
                userShip.hull = userShip.hull + 10;
                userShip.firePower = userShip.firePower + 1;
                startGame2();
            }
        }else{
            endGame();
        }
    }
  })();
  })();
  })();
  })();
  })();
  })();
})()
}
//game starts here after everything has been defined
startGame();

let startGame2 = () =>{
    //Prompt to start the Next Wave after the startGame2 function is called
        (async () => {
      const response = await prompts({
        type: 'text',
        name: 'game',
        message: 'Start Second wave?',
        validate: game => game === 'start'
      });
      console.clear();
      console.log('Wave 2 Starting');
    //First Attack Prompt to attack the alien ship 7
      (async () => {
        const response = await prompts({
          type: 'text',
          name: 'attack',
          message: 'Attack?',
          validate: attack => attack === 'attack'
        });
    //Below is the basic checks and fighting mechanics between the user and the alien ship. This code is used for every ship.
    //When attacking the game logs the action as well as all the events that take place in a round. After the round is over the next round will start.
        console.log('Attacking Ship 7');
    
        for(fighterShip7.hull; fighterShip7.hull > 0; fighterShip7.hull + 0){
            if(userShip.hull > 0){
                if(userShip.accuracy < .8) {
                    fighterShip7.hull = fighterShip7.hull - userShip.firePower;
                    console.log("Your Attack Hits for " + userShip.firePower);
                    console.log('Fighter Ship Hull = ' + fighterShip7.hull);
                }
            if(fighterShip7.hull > 0) {
                if(fighterShip7.accuracy <= .8 && fighterShip7.accuracy >= .4) {
                    userShip.hull = userShip.hull - fighterShip7.firePower;
                    console.log("You've Been Hit For " + fighterShip7.firePower)
                }else {
                    console.log("Enemy Attack missed");
                }
            }else{
                deadShips.push('Fighter Ship 7');
                console.log('Dead Ships: ' + deadShips);
                console.log("ship 7 Destroyed");
                console.log('Your Hull = ' + userShip.hull);
            }
            }else{
                endGame();
            }
    }
    //Attack  or retreat Prompt to attack the alien ship 8 or force a game over
    (async () => {
        const response = await prompts({
          type: 'text',
          name: 'attack',
          message: 'Attack or Retreat?',
          validate: attack => attack === 'attack',
          validate: attack => attack === 'retreat' ?  endGame(): true
        });
        console.log('Attacking Ship 8');
    
        for(fighterShip8.hull; fighterShip8.hull > 0; fighterShip8.hull + 0){
            if(userShip.hull > 0){
                if(userShip.accuracy < .8) {
                    fighterShip8.hull = fighterShip8.hull - userShip.firePower;
                    console.log("Your Attack Hits for " + userShip.firePower);
                    console.log('Fighter Ship Hull = ' + fighterShip8.hull);
                }
    
                if(fighterShip8.hull > 0) {
                    if(fighterShip8.accuracy <= .8 && fighterShip8.accuracy >= .4) {
                        userShip.hull = userShip.hull - fighterShip8.firePower;
                        console.log("You've Been Hit For " + fighterShip8.firePower);
                }else {
                    console.log("Enemy Attack missed");
                }
                }else{
                    deadShips.push('Fighter Ship 8');
                    console.log('Dead Ships: ' + deadShips);
                    console.log("ship 8 Destroyed");
                    console.log('Your Hull = ' + userShip.hull);
                }
            }else{
                endGame();
            }
        }
    //Attack  or retreat Prompt to attack the alien ship 9 or force a game over
    (async () => {
        const response = await prompts({
            type: 'text',
            name: 'attack',
            message: 'Attack or Retreat?',
            validate: attack => attack === 'attack',
            validate: attack => attack === 'retreat' ?  endGame(): true
        });
        console.log('Attacking Ship 9');
    
        for(fighterShip9.hull; fighterShip9.hull > 0; fighterShip9.hull + 0){
            if(userShip.hull > 0){
                if(userShip.accuracy < .8) {
                    fighterShip9.hull = fighterShip9.hull - userShip.firePower;
                    console.log("Your Attack Hits for " + userShip.firePower);
                    console.log('Fighter Ship Hull = ' + fighterShip9.hull);
                }
    
                if(fighterShip9.hull > 0) {
                    if(fighterShip9.accuracy <= .8 && fighterShip9.accuracy >= .4) {
                    userShip.hull = userShip.hull - fighterShip9.firePower;
                    console.log("You've Been Hit For " + fighterShip9.firePower);
                }else{
                    console.log("Enemy Attack missed");
                }
                }else{
                    deadShips.push('Fighter Ship 9');
                    console.log('Dead Ships: ' + deadShips);
                    console.log("ship 9 Destroyed");
                    console.log('Your Hull = ' + userShip.hull);
                    console.log('Hull Has gained 3 hp');
                    console.log('Fire Power +1')
                    userShip.hull = userShip.hull + 3;
                    userShip.firePower = userShip.firePower + 1;
                }
            }else{
                endGame();
            }
        }
    //Attack  or retreat Prompt to attack the alien ship 10 or force a game over
    (async () => {
        const response = await prompts({
            type: 'text',
            name: 'attack',
            message: 'Attack or Retreat?',
            validate: attack => attack === 'attack',
            validate: attack => attack === 'retreat' ?  endGame(): true
        });
    
        console.log('Attacking Ship 10');
    
        for(fighterShip10.hull; fighterShip10.hull > 0; fighterShip10.hull + 0){
            if(userShip.hull > 0){
                if(userShip.accuracy < .8) {
                    fighterShip10.hull = fighterShip10.hull - userShip.firePower;
                    console.log("Your Attack Hits for " + userShip.firePower);
                    console.log('Fighter Ship Hull = ' + fighterShip10.hull);
                }
    
                if(fighterShip10.hull > 0) {
                    if(fighterShip10.accuracy <= .8 && fighterShip10.accuracy >= .4) {
                        userShip.hull = userShip.hull - fighterShip10.firePower;
                        console.log("You've Been Hit For " + fighterShip10.firePower);
                    }else{
                        console.log("Enemy Attack missed");
                    }
                }else{
                    deadShips.push('Fighter Ship 10');
                    console.log('Dead Ships: ' + deadShips);
                    console.log("ship 10 Destroyed");
                    console.log('Your Hull = ' + userShip.hull);
                }
            }else{
                endGame();
            }
        }
    //Attack  or retreat Prompt to attack the alien ship 11 or force a game over
    (async () => {
        const response = await prompts({
            type: 'text',
            name: 'attack',
            message: 'Attack or Retreat?',
            validate: attack => attack === 'attack',
            validate: attack => attack === 'retreat' ?  endGame(): true
        });
        console.log('Attacking Ship 11');
    
        for(fighterShip11.hull; fighterShip11.hull > 0; fighterShip11.hull + 0){
            if(userShip.hull > 0){
                if(userShip.accuracy < .8) {
                    fighterShip11.hull = fighterShip11.hull - userShip.firePower;
                    console.log("Your Attack Hits for " + userShip.firePower);
                    console.log('Fighter Ship Hull = ' + fighterShip11.hull);
                }
    
                if(fighterShip11.hull > 0) {
                    if(fighterShip11.accuracy <= .8 && fighterShip11.accuracy >= .4) {
                        userShip.hull = userShip.hull - fighterShip11.firePower;
                        console.log("You've Been Hit For " + fighterShip11.firePower);
                    }else {
                        console.log("Enemy Attack missed");
                    }
                }else{
                    deadShips.push('Fighter Ship 11');
                    console.log('Dead Ships: ' + deadShips);
                    console.log("ship 11 Destroyed");
                    console.log('Your Hull = ' + userShip.hull);
                }
            }else{
                endGame();
            }
        }
    //Attack  or retreat Prompt to attack the alien ship 12 or force a game over
    (async () => {
        const response = await prompts({
            type: 'text',
          name: 'attack',
          message: 'Attack or Retreat?',
          validate: attack => attack === 'attack',
          validate: attack => attack === 'retreat' ?  endGame(): true
        });
        console.log('Attacking Ship 12');
    
        for(fighterShip12.hull; fighterShip12.hull > 0; fighterShip12.hull + 0){
            if(userShip.hull > 0){
                if(userShip.accuracy < .8) {
                    fighterShip12.hull = fighterShip12.hull - userShip.firePower;
                    console.log("Your Attack Hits for " + userShip.firePower);
                    console.log('Fighter Ship Hull = ' + fighterShip12.hull);
                }
    
                if(fighterShip12.hull > 0) {
                    if(fighterShip12.accuracy < 1) {
                        userShip.hull = userShip.hull - fighterShip12.firePower;
                        console.log("You've Been Hit For " + fighterShip12.firePower);
                    }else {
                        console.log("Enemy Attack missed");
                    }
                }else{
                    deadShips.push('Fighter Ship 12');
                    console.log('Dead Ships: ' + deadShips);
                    console.log("ship 12 Destroyed");
                    console.log('Wave 2 Destroyed');
                    console.log('Hull Has gained 10 hp');
                    console.log('Fire Power +1')
                    userShip.hull = userShip.hull + 10;
                    userShip.firePower = userShip.firePower + 1;
                    startGame3();
                }
            }else{
                endGame();
            }
        }
      })();
      })();
      })();
      })();
      })();
      })();
    })()
}
let startGame3 = () =>{
        //Prompt to start the Final Wave after the startGame3 function is called
            (async () => {
          const response = await prompts({
            type: 'text',
            name: 'game',
            message: 'Start Final Wave?',
            validate: game => game === 'start'
          });
          console.clear();
          console.log('Final Wave Starting');
        //First Attack Prompt to attack the alien ship 13
          (async () => {
            const response = await prompts({
              type: 'text',
              name: 'attack',
              message: 'Attack?',
              validate: attack => attack === 'attack'
            });
        //Below is the basic checks and fighting mechanics between the user and the alien ship. This code is used for every ship.
        //When attacking the game logs the action as well as all the events that take place in a round. After the round is over the next round will start.
            console.log('Attacking Ship 13');
        
            for(fighterShip13.hull; fighterShip13.hull > 0; fighterShip13.hull + 0){
                if(userShip.hull > 0){
                    if(userShip.accuracy < .8) {
                        fighterShip13.hull = fighterShip13.hull - userShip.firePower;
                        console.log("Your Attack Hits for " + userShip.firePower);
                        console.log('Fighter Ship Hull = ' + fighterShip13.hull);
                    }
                if(fighterShip13.hull > 0) {
                    if(fighterShip13.accuracy <= .8) {
                        userShip.hull = userShip.hull - fighterShip13.firePower;
                        console.log("You've Been Hit For " + fighterShip13.firePower)
                    }else {
                        console.log("Enemy Attack missed");
                    }
                }else{
                    deadShips.push('Fighter Ship 13');
                    console.log('Dead Ships: ' + deadShips);
                    console.log("ship 13 Destroyed");
                    console.log('Your Hull = ' + userShip.hull);
                }
                }else{
                    endGame();
                }
        }
        //Attack  or retreat Prompt to attack the alien ship 14 or force a game over
        (async () => {
            const response = await prompts({
              type: 'text',
              name: 'attack',
              message: 'Attack or Retreat?',
              validate: attack => attack === 'attack',
              validate: attack => attack === 'retreat' ?  endGame(): true
            });
            console.log('Attacking Ship 14');
        
            for(fighterShip14.hull; fighterShip14.hull > 0; fighterShip14.hull + 0){
                if(userShip.hull > 0){
                    if(userShip.accuracy < .8) {
                        fighterShip14.hull = fighterShip14.hull - userShip.firePower;
                        console.log("Your Attack Hits for " + userShip.firePower);
                        console.log('Fighter Ship Hull = ' + fighterShip14.hull);
                    }
        
                    if(fighterShip14.hull > 0) {
                        if(fighterShip14.accuracy <= .8) {
                            userShip.hull = userShip.hull - fighterShip14.firePower;
                            console.log("You've Been Hit For " + fighterShip14.firePower);
                    }else {
                        console.log("Enemy Attack missed");
                    }
                    }else{
                        deadShips.push('Fighter Ship 14');
                        console.log('Dead Ships: ' + deadShips);
                        console.log("ship 14 Destroyed");
                        console.log('Your Hull = ' + userShip.hull);
                    }
                }else{
                    endGame();
                }
            }
        //Attack  or retreat Prompt to attack the alien ship 15 or force a game over
        (async () => {
            const response = await prompts({
                type: 'text',
                name: 'attack',
                message: 'Attack or Retreat?',
                validate: attack => attack === 'attack',
                validate: attack => attack === 'retreat' ?  endGame(): true
            });
            console.log('Attacking Ship 15');
        
            for(fighterShip15.hull; fighterShip15.hull > 0; fighterShip15.hull + 0){
                if(userShip.hull > 0){
                    if(userShip.accuracy < .8) {
                        fighterShip15.hull = fighterShip15.hull - userShip.firePower;
                        console.log("Your Attack Hits for " + userShip.firePower);
                        console.log('Fighter Ship Hull = ' + fighterShip15.hull);
                    }
        
                    if(fighterShip15.hull > 0) {
                        if(fighterShip15.accuracy <= .8) {
                        userShip.hull = userShip.hull - fighterShip15.firePower;
                        console.log("You've Been Hit For " + fighterShip15.firePower);
                    }else{
                        console.log("Enemy Attack missed");
                    }
                    }else{
                        deadShips.push('Fighter Ship 15');
                        console.log('Dead Ships: ' + deadShips);
                        console.log("ship 15 Destroyed");
                        console.log('Your Hull = ' + userShip.hull);
                        console.log('Hull Has gained 3 hp');
                        console.log('Fire Power +1')
                        userShip.hull = userShip.hull + 3;
                        userShip.firePower = userShip.firePower + 1;
                    }
                }else{
                    endGame();
                }
            }
        //Attack  or retreat Prompt to attack the alien ship 16 or force a game over
        (async () => {
            const response = await prompts({
                type: 'text',
                name: 'attack',
                message: 'Attack or Retreat?',
                validate: attack => attack === 'attack',
                validate: attack => attack === 'retreat' ?  endGame(): true
            });
        
            console.log('Attacking Ship 16');
        
            for(fighterShip16.hull; fighterShip16.hull > 0; fighterShip16.hull + 0){
                if(userShip.hull > 0){
                    if(userShip.accuracy < .8) {
                        fighterShip16.hull = fighterShip16.hull - userShip.firePower;
                        console.log("Your Attack Hits for " + userShip.firePower);
                        console.log('Fighter Ship Hull = ' + fighterShip16.hull);
                    }
        
                    if(fighterShip16.hull > 0) {
                        if(fighterShip16.accuracy <= .8) {
                            userShip.hull = userShip.hull - fighterShip16.firePower;
                            console.log("You've Been Hit For " + fighterShip16.firePower);
                        }else{
                            console.log("Enemy Attack missed");
                        }
                    }else{
                        deadShips.push('Fighter Ship 16');
                        console.log('Dead Ships: ' + deadShips);
                        console.log("ship 16 Destroyed");
                        console.log('Your Hull = ' + userShip.hull);
                    }
                }else{
                    endGame();
                }
            }
        //Attack  or retreat Prompt to attack the alien ship 17 or force a game over
        (async () => {
            const response = await prompts({
                type: 'text',
                name: 'attack',
                message: 'Attack or Retreat?',
                validate: attack => attack === 'attack',
                validate: attack => attack === 'retreat' ?  endGame(): true
            });
            console.log('Attacking Ship 17');
        
            for(fighterShip17.hull; fighterShip17.hull > 0; fighterShip17.hull + 0){
                if(userShip.hull > 0){
                    if(userShip.accuracy < .8) {
                        fighterShip17.hull = fighterShip17.hull - userShip.firePower;
                        console.log("Your Attack Hits for " + userShip.firePower);
                        console.log('Fighter Ship Hull = ' + fighterShip17.hull);
                    }
        
                    if(fighterShip17.hull > 0) {
                        if(fighterShip17.accuracy <= .8) {
                            userShip.hull = userShip.hull - fighterShip17.firePower;
                            console.log("You've Been Hit For " + fighterShip17.firePower);
                        }else {
                            console.log("Enemy Attack missed");
                        }
                    }else{
                        deadShips.push('Fighter Ship 17');
                        console.log('Dead Ships: ' + deadShips);
                        console.log("ship 17 Destroyed");
                        console.log('Your Hull = ' + userShip.hull);
                    }
                }else{
                    endGame();
                }
            }
        //Attack  or retreat Prompt to attack the alien ship 18 or force a game over
        (async () => {
            const response = await prompts({
                type: 'text',
              name: 'attack',
              message: 'Attack or Retreat?',
              validate: attack => attack === 'attack',
              validate: attack => attack === 'retreat' ?  endGame(): true
            });
            console.log('Attacking Ship 18');
        
            for(fighterShip18.hull; fighterShip18.hull > 0; fighterShip18.hull + 0){
                if(userShip.hull > 0){
                    if(userShip.accuracy < .8) {
                        fighterShip18.hull = fighterShip18.hull - userShip.firePower;
                        console.log("Your Attack Hits for " + userShip.firePower);
                        console.log('Fighter Ship Hull = ' + fighterShip18.hull);
                    }
        
                    if(fighterShip18.hull > 0) {
                        if(fighterShip18.accuracy < 1) {
                            userShip.hull = userShip.hull - fighterShip18.firePower;
                            console.log("You've Been Hit For " + fighterShip18.firePower);
                        }else {
                            console.log("Enemy Attack missed");
                        }
                    }else{
                        deadShips.push('Fighter Ship 18');
                        console.log('Dead Ships: ' + deadShips);
                        console.log("ship 18 Destroyed");
                        console.log('Your Hull = ' + userShip.hull);
                        console.log('Game Over YOU HAVE WON!');
                    }
                }else{
                    endGame();
                }
            }
          })();
          })();
          })();
          })();
          })();
          })();
        })()
}
