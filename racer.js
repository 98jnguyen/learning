let raceNumber = Math.floor(Math.random() * 1000);

let registeredRunner = false;
let ageRunner = 18;

if (registeredRunner && ageRunner > 18){
  raceNumber +=1000
}

if (ageRunner > 18 && registeredRunner){
  console.log(`${raceNumber}, you will race at 9:30AM.`)
}
else if (ageRunner > 18 && !registeredRunner){
  console.log(`${raceNumber}, you will race at 11:00AM.`)
}

else if (ageRunner < 18) {
  console.log(`${raceNumber}, you will race at 12:30PM.`)
}
else {
  console.log(`${raceNumber}, see the registration desk, please.`)
}
