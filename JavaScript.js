
// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);

// Result: The murderer is Miss Scarlet.  
// Reason: const declareMurderer is called, which returns a string (murderer).

//  Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
};

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Result: TypeError 
// Reason: The variable (murderer) is declared of the const type, so it cannot be resigned. By calling changeMurderer function it attempts to reassign the murderer variable, but it can not. Resulting in error: Assignment to constant variable.

// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);


// Result: First Verdict:  The murderer is Mrs. Peacock. Second Verdict:  The murderer is Professor Plum.
// Reason: The `declareMurderer` function is called, which creates a new local variable (murderer) and returns a string that uses a local variable. It does not effect initial murder variable. Those, second verdict that is uses initial murder variable will outcome with Professor Plum


// Episode 4


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// Result: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Suspect three is Mrs. Peacock.
// Reason: The initial suspect variables are declared. `suspectThree` has the value 'Mrs. Peacock'. When the `declareAllSuspects` function is called, it creates a new local variable `suspectThree` with the value 'Colonel Mustard' and does not effect the initial variable of the same name. The string returned by `declareAllSuspects` refers to the two initial variables `suspectOne` and `suspectTwo` and the local variable `suspectThree`. The second log refers to the unchanged initial variable, `suspectThree` with the value 'Mrs. Peacock'.

//  Episode 5


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
};

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
};

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);


// Result: The weapon is the Revolver.
// Reason: changeWeapon is called, so scenario.weapon = Revolver. Finally, delclareWeapon` is called, returning a string containing scenario.weapon = Revolver.


// Episode 6


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// Result: The murderer is Mrs. White.
// Reason: changeMurder is called, which first reassigns murderer to Mr. Green. Then calls a second function plotTwist, which reassigns murderer to Mrs. White. Finally, declareMurderer is called returning murderer variable.

//  Episode 7


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


// Result: The murderer is Mr. Green.

// Reason: changeMurderer is called, firstly it reassigned murderer = Mr. Green. Secondly, it calls plotTwist that creates a new local variable murderer = Colonel Mustard. Thirdly, unexpectedOutcome is called which reassigns the local variable in the plotTwist function to be Miss Scarlet. Lastly, declareMurderer is called, that returns a string that refers to the initial murderer variable, which has only been changed once.

//  Episode 8


const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Result: The weapon is Candle Stick.
// Reason: changeScenario is called which update's scenario.murder to Mrs.Peacock and scenario.room to Dining Room. If statements checks if scenario.room === Dining room, which it is. So if function updates scenario.murder to Colonel Mustart. Then unexcredOutcome is called, that's checks whether scenario.murder = Colonel Mustard, which it is. Resulting in an update of scenario.weapon = Candle Stick. Finally declareWeapon is called that returns Candle Stick. 


// Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// Result: The murderer is Professor Plum.
// Reason: A variable murderer = Professor Plum. The an if statement checks if murderer is equal to Professor Plum. As it is true, if statement creates a new local murderer variable (Mrs. Peacock). Because both variables declared with the let and const types, that are block scoped, initial murder remained the same. When declareMurderer function is called, it returns an initial murder variable.
