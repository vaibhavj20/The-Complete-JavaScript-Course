//-----------------------------------------linking js file----------------------------------------------------------
// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// 40 + 8 + 23 - 10;
// console.log(40 + 50);

//-----------------------------------------Values and Variables-----------------------------------------------------
// console.log('Vaibhav');
// //vaibhav is value;
// console.log(23);

// let firstName='Satish';
// //here this is variable ie.firstName;
// console.log(firstName);

// //let 3years='vaibhav'; //syntax error
// let vaibhav_jam='VJ';
// let $function=20;
// let Person ='Vaibhav';//this will work but you should use lowercase letters

// let PI=3.1415;

// //Variables names are descriptive


// //Try to declared variables like this
// let myFirstJob='Programmer';
// let myCurrentJob='Freelancer';

// console.log(myFirstJob);
//console.log(myCurrentJob);

//-----------------------------------------Data Types---------------------------------------------------------------

///Primitive Data types

// Number,Stirng,Boolean
// undefined ,NULL,Symbol(ES2015),BigInt(ES2020)

//Dynamic typing--we dont have to manually define the data type of the value stored in variable instead data type are determined automatically

// let javaScriptIsFun=true;
// console.log(javaScriptIsFun);

// console.log(typeof(javaScriptIsFun)); //boolean
// console.log(typeof true);
// console.log(typeof 20);
// console.log(typeof 'Vaibhav');
//   javaScriptIsFun='Yes';
//   console.log(typeof javaScriptIsFun);

//   let year;
//   console.log(typeof year);

//   year=2001;
//   console.log(typeof year);

//   console.log(typeof null);


//---------------------------------------Let Const var--------------------------------------------------------------

// let age=23;
// age=24;


// //immutable variable ,,we cant do like this
// const birthYear=2001;
// birthYear=2000;

// var job='Programmer';
// job='Freelancer';

// lastName='Jamdhade';
// console.log(lastName);

//---------------------------------------Basic Operators------------------------------------------------------------

//operators-allows us to transform values or combine multiple values ,,and really do all kind of work with values 
//having multiple types

// const ageVaibhav=23;
// console.log(ageVaibhav);

// const now=2024;

// const ageSatish=now-2000;
// const ageYogesh=now-2001;

// console.log(ageSatish,ageYogesh,ageVaibhav);

// console.log(ageSatish*2 , ageSatish/2 , 2**3);
// //2**3 =>  2 to the power of 3 = 2*2*2;


// const firstName='Vaibhav';
// const lastName='Jamdhade';

// console.log(firstName + ' ' + lastName);

// let x =10+5;

// x+=10;// x=x+10;
// x*=4;
// x++;
// x--;
// console.log(x);

// console.log(ageSatish > ageYogesh);  // > < >= <=

// console.log(ageSatish >=18);
// console.log(ageVaibhav <=50);


//----------------------------------------Operator precedence-------------------------------------------------------
// const now=2037;
// const ageSatish=now-2001;
// const ageYogesh=now-2000;
// console.log(now - 1991 > now - 2018);

//--------------------------------------String and template Literals------------------------------------------------

// const firstName='vaibhav';
// const job='Programmer';
// const birthYear=2001;
// const year=2024;
// //type coersion-js numberes converted into strings
// const vaibhav="I'am " + firstName + ',a ' + (year - birthYear) + ' years old ' + job + '!';

// //console.log(vaibhav);


// //template literal

// const vaibhavNew=`I'am ${firstName},a ${year-birthYear} years old ${job} !`;

// console.log(vaibhavNew);


// console.log(`just a regular string..`);

// console.log('Hello Friends \n\
// My name is Vaibhav');
// //use of template literal
// console.log(`Hello Guys,
// My name is Vaibhav,
// I'am from Nashik,Maharashtra!`);


///---------------------------------------If else statements--------------------------------------------------------

// const age=15;

// const isOldEnough=age >=18;

// if(isOldEnough){
//     console.log('Vaibhav can start driving license 🚗')
// }
// else{
//     const yearsLeft=18-age;
//     console.log(`Vaibhav is too young.wait another ${yearsLeft} years :)`);
// }


//----------------------------------------Type conversion and Type coersion-----------------------------------------
 //type conversion- when we manually convert from one type to another 
 //type coersion- Javascript automatically converts types behind the scenes for us.

//  const inputYear='2001';
//  console.log(Number(inputYear));
//  console.log(Number(inputYear)+10);//200110


//  console.log(Number('Vaibhav'));//NaN-Not a number -invalid number

//  console.log(typeof(NaN));

//  console.log(String(23));

// //type coercion
// console.log('I am ' + 23 + ' years old')
//   //coercion btn string and number then number is converted into string

// console.log('23'-'10'-3);
//  //here in this strings are converted into numbers.
//  console.log('23' * '2');//converted into numbers 

//  console.log('23' > '18');

//  let n='1'+1;
//  n=n-1;
//  console.log(n);


//------------------------------------------Truthy values and Falsy Values---------------------------------------
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// //-----------------------------------------Equality Operators----------------------------------------------------
// // Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult') ;

// if (age == 18) console.log('You just became an adult');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');


// //------------------------------------------ Logical Operators---------------------------------------------------
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


//------------------------------------------ The switch Statement---------------------------------------------------
// const day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }


// // -------------------------------------Statements and Expressions----------------------------------------------
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);


// // ----------------------------------The Conditional (Ternary) Operator-----------------------------------------
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

