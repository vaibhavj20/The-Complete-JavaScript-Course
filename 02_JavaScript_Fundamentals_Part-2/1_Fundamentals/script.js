// 'use strict';


// //----------------------------------------- Activating Strict Mode--------------------------------------------------
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;



// ------------------------------------------------Functions--------------------------------------------------------
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');



// // -------------------------Function Declarations vs. Expressions-----------------------------------------------

// // Function declaration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);



//------------------------------------------- Arrow functions------------------------------------------------------

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));



// ----------------------------------Functions Calling Other Functions---------------------------------------------
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));



// // -------------------------------Introduction to Arrays--------------------------------------------------
// const friend1 = 'Vaibhav';
// const friend2 = 'Satish';
// const friend3 = 'Yogesh';

// const friends = ['Vaibhav', 'Satish', 'Yogesh'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Vaibhav';
// const vaibhav = [firstName, 'Jamdhade', 2037 - 1991, 'Programmer', friends];
// console.log(vaibhav);
// console.log(vaibhav.length);

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);



// // --------------------------------Basic Array Operations (Methods)------------------------------------
// const friends = ['vaibhav', 'Satish', 'Yogesh'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Vaibhav');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Satish'));
// console.log(friends.indexOf('Neil'));

// friends.push(23);
// console.log(friends.includes('Satish'));
// console.log(friends.includes('eil'));
// console.log(friends.includes(23));

// if (friends.includes('Satish')) {
//   console.log('You have a friend called Satish');
// }



//------------------------------------ Introduction to Objects------------------------------------------
// const vaibhavArray = [
//     'Vaibhav',
//     'Jamdhade',
//     2024 - 2001,
//     'Programmer',
//     ['Neil', 'Yogesh', 'Satish']
//   ];
  
//   const vaibhav = {
//     firstName: 'vaibhav',
//     lastName: 'jamdhade',
//     age: 2024 - 2001,
//     job: 'Programmer',
//     friends: ['Neil', 'Yogesh', 'Satish']
//   };
  
  
//   // Dot vs. Bracket Notation
//   const vaibhav = {
//     firstName: 'vaibhav',
//     lastName: 'jamdhade',
//     age: 2024 - 2001,
//     job: 'Programmer',
//     friends: ['Satish', 'Yogesh', 'Neil']
//   };

//   console.log(vaibhav);
  
//   console.log(vaibhav.lastName);
//   console.log(vaibhav['lastName']);
  
//   const nameKey = 'Name';
//   console.log(vaibhav['first' + nameKey]);
//   console.log(vaibhav['last' + nameKey]);
  
  
  
//   const interestedIn = prompt('What do you want to know about vaibhav? Choose between firstName, lastName, age, job, and friends');
  
//   if (vaibhav[interestedIn]) {
//     console.log(vaibhav[interestedIn]);
//   } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
//   }
  
//   vaibhav.location = 'India';
//   vaibhav['twitter'] = '@vaibhavjamdhade';
//   console.log(vaibhav);
  
//   // Challenge
//   // "Jonas has 3 friends, and his best friend is called Satish"
//   console.log(`${vaibhav.firstName} has ${vaibhav.friends.length} friends, and his best friend is called ${vaibhav.friends[0]}`);
  
  

//-------------------------------------Object Methods------------------------------------------------
  
//   const vaibhav = {
//     firstName: 'vaibhav',
//     lastName: 'Jamdhade',
//     birthYeah: 2001,
//     job: 'programmer',
//     friends: ['Neil', 'Yogi', 'Satish'],
//     hasDriversLicense: true,
  
//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
  
//     // calcAge: function () {
//     //   // console.log(this);
//     //   return 2037 - this.birthYeah;
//     // }
  
//     calcAge: function () {
//       this.age = 2037 - this.birthYeah;
//       return this.age;
//     },
  
//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${vaibhav.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
//   };
  
//   console.log(vaibhav.calcAge());
  
//   console.log(vaibhav.age);
//   console.log(vaibhav.age);
//   console.log(vaibhav.age);
  
//   // Challenge
//   // "Jonas is a 46-year old teacher, and he has a driver's license"
//   console.log(vaibhav.getSummary());

  
// ---------------------------------Iteration: The for Loop--------------------------------------------

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }
  
  
 
//   //---------------------- Looping Arrays, Breaking and Continuing-----------------------------------------
//   const vaibhav = [
//     'vaibhav',
//     'jamdhade',
//     2024 - 2001,
//     'programmer',
//     ['Mahi', 'Pankaj', 'Satish'],
//     true
//   ];
//   const types = [];
  

  
//   for (let i = 0; i < vaibhav.length; i++) {
//     // Reading from jonas array
//     console.log(vaibhav[i], typeof vaibhav[i]);
  
//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof vaibhav[i]);
//   }
  
//   console.log(types);
  
//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];
  
//   for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
//   }
//   console.log(ages);
  
//   // continue and break
//   console.log('--- ONLY STRINGS ---')
//   for (let i = 0; i < vaibhav.length; i++) {
//     if (typeof vaibhav[i] !== 'string') continue;
  
//     console.log(vaibhav[i], typeof vaibhav[i]);
//   }
  
//   console.log('--- BREAK WITH NUMBER ---')
//   for (let i = 0; i < vaibhav.length; i++) {
//     if (typeof vaibhav[i] === 'number') break;
  
//     console.log(vaibhav[i], typeof vaibhav[i]);
//   }
  
  
//   ///////////////////////////////////////
//   // Looping Backwards and Loops in Loops
//   const vaibhav = [
//     'vaibhav',
//     'jamdhade',
//     2024 - 2001,
//     'programmer',
//     ['Mahi', 'Pankaj', 'Satish'],
//     true
//   ];
  
//   // 0, 1, ..., 4
//   // 4, 3, ..., 0
  
//   for (let i = vaibhav.length - 1; i >= 0; i--) {
//     console.log(i, vaibhav[i]);
//   }
  
//   for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);
  
//     for (let rep = 1; rep < 6; rep++) {
//       console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
//   }
  
  
//   ///////////////////////////////////////
//   // The while Loop
//   for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }
  
//   let rep = 1;
//   while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
//   }
  
//   let dice = Math.trunc(Math.random() * 6) + 1;
  
//   while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
//   }
  