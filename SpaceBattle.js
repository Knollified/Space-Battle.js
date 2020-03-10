const prompts = require('prompts');
let userShip = {
    hull: 20,
    firePower: 5,
    accuracy: .7
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
let deadShips = [];
let game = true;
let startGame = () =>{
if (game == true){
(async () => {
  const response = await prompts({
    type: 'text',
    name: 'game',
    message: 'Start Game?',
    validate: game => game == 'start'
  });
  console.clear();
  console.log('Game Starting');
  (async () => {
    const response = await prompts({
      type: 'text',
      name: 'attack',
      message: 'Attack?',
      validate: attack => attack == 'attack'
    });
    console.log('Attacking Ship 1');

    for(fighterShip1.hull; fighterShip1.hull > 0; fighterShip1.hull){
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
(async () => {
    const response = await prompts({
      type: 'text',
      name: 'attack',
      message: 'Attack or Retreat?',
      validate: attack => attack === 'retreat' ?  endGame(): true
    });
    if(response === 'retreat'){
        endGame();
    }
    console.log('Attacking Ship 2');

    for(fighterShip2.hull; fighterShip2.hull > 0; fighterShip2.hull){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip2.hull = fighterShip2.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip2.hull);
            }

            if(fighterShip2.hull > 0) {
                if(fighterShip2.accuracy < .8) {
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
(async () => {
    const response = await prompts({
        type: 'text',
        name: 'attack',
        message: 'Attack or Retreat?',
        validate: attack => attack === 'retreat' ?  endGame(): true
    });
    if(response === 'retreat'){
       endGame();
    }
    console.log('Attacking Ship 3');

    for(fighterShip3.hull; fighterShip3.hull > 0; fighterShip3.hull){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip3.hull = fighterShip3.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip3.hull);
            }

            if(fighterShip3.hull > 0) {
                if(fighterShip3.accuracy < .8) {
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
            }
        }else{
            endGame();
        }
    }
(async () => {
    const response = await prompts({
        type: 'text',
        name: 'attack',
        message: 'Attack or Retreat?',
        validate: attack => attack === 'retreat' ?  endGame(): true
    });
    if(response === 'retreat'){
       endGame();
    }
    console.log('Attacking Ship 4');

    for(fighterShip4.hull; fighterShip4.hull > 0; fighterShip4.hull){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip4.hull = fighterShip4.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip4.hull);
            }

            if(fighterShip4.hull > 0) {
                if(fighterShip4.accuracy < .8) {
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
(async () => {
    const response = await prompts({
        type: 'text',
        name: 'attack',
        message: 'Attack or Retreat?',
        validate: attack => attack === 'retreat' ?  endGame(): true
    });
    if(response === 'retreat'){
       endGame();
    }
    console.log('Attacking Ship 5');

    for(fighterShip5.hull; fighterShip5.hull > 0; fighterShip5.hull){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip5.hull = fighterShip5.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip5.hull);
            }

            if(fighterShip5.hull > 0) {
                if(fighterShip5.accuracy < .8) {
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
(async () => {
    const response = await prompts({
        type: 'text',
      name: 'attack',
      message: 'Attack or Retreat?',
      validate: attack => attack === 'retreat' ?  endGame(): true
    });
    if(response === 'retreat'){
       endGame();
    }
    console.log('Attacking Ship 6');

    for(fighterShip6.hull; fighterShip6.hull > 0; fighterShip6.hull){
        if(userShip.hull > 0){
            if(userShip.accuracy < .8) {
                fighterShip6.hull = fighterShip6.hull - userShip.firePower;
                console.log("Your Attack Hits for " + userShip.firePower);
                console.log('Fighter Ship Hull = ' + fighterShip6.hull);
            }

            if(fighterShip6.hull > 0) {
                if(fighterShip6.accuracy < .8) {
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
})()}else{
        endGame();
    };
}
let endGame = () =>{
    console.clear();
    console.log('Game Over!');
    process.exit(1);
}
startGame();