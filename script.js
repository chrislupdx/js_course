
// var firstName = 'ugh';
// console.log(firstName);

// var lastname = "whatever";
// var age = 1;
// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'no';
// console.log(job)

// //variable naming rules
// var _3years = 3;
// var johnMark = "john +mark";

/*************************************************
 * Variable Mutation and type coercion
 */

//  var firstName = 'John';
//  var age = 28;

//  console.log(firstName + ' ' + age);
// // type cooercion example with isMarried via false/undefined toggle
//  var job, isMarried;
//  job = 'teacher';
//  isMarried = false;
// //  delcaring multiple variables works like ^

// console.log(firstName + ' is a ' + age + 'year old ' + job + '. is he married?' + isMarried);

// // Var mutation (changing the value of a variable)
// age = "five";
// // since we already declared it, there's no need to var #dynamic typing
// job = 'monster';

// alert(firstName + ' is a ' + age + 'year old ' + job + '. is he married?' + isMarried);

// var lastname = prompt("what is his last name");
// //PROMPT IS SO COOL
// console.log(firstName + ' ' + lastname);


/*****************
 * Basic Operators
 */
// var year, yearJohn, yearMark;
// now = 2010;
//  var yearJohn = 12;
//  var yearMark = 32;

//  console.log(yearJohn);
// // math operators
// console.log(now + 3154314);
// console.log(now * 3154314);
// console.log(now / 3154314);

// // logic operators
//  var markOlder = yearMark  >yearJohn;
//  console.log(markOlder)

//  //typeof operator
//  console.log(typeof markOlder);
//  console.log(typeof yearMark);
//  console.log(typeof "ageJohn");
//  console.log(typeof x);

/***********
 * operator precedence
 */

//  var now = 2019;
//  var yearJohn = 1922;
//  var fullAge = 18;

// //  initial guess is PEMDAS then comparisons go off
//  var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 4;
// var average = (ageJohn + ageMark ) / 2;
// console.log(average)


// // Multiple assignment

// var x, y;
// x = (3 + 5) * 4 - 6;  // 8 * 4 - 6 = 26?
// console.log(x);

// // but if

// x = y = (3 + 5) * 4 - 6;  // 8 * 4 - 6 = 26?
// console.log(x, y);

// // more operators
//  x = x * 2;
// //  is the same as
// x *= 2;
// console.log(x);
// x += 10; 
// console.log(x);
// x++
// //increment
// x--
// //decrement

/****************************
 * If /else statements
 */
// var firstName = "john";
// var civilStatus = "single";

// if (civilStatus === "married") {
//     console.log(firstName + " is married");
// } else {
//     console.log(firstName + " will hopefully marry soon ")
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + " is married");
// } else {
//     console.log(firstName + " will hopefully marry soon ")
// }

// const markheight = 125; 
// const markweight = 77;

// const johnheight = 1211;
// const johnweight = 121131;

// markBMI = markweight / (markheight * markheight);
// console.log("markBMI is " + markBMI);

// johnBMI = johnweight / (johnheight * johnheight );
// console.log("johnBMI is " + johnBMI);

// if (markBMI > johnBMI) {
//     console.log('Mark\' BMI is higher than JOHn\'s.');
// } else {
//     console.log('John\' BMI is higher than Mark\'s.');
// }

/******
 * boolean logic
 */
// var firstName = 'John';
// var age = 16;

// if (ave < 13) {
//     console.log(firstName + 'is a boy');
// } else if (age >= 13 && age < 20){
//     //between 13 and 20 ===age >=13 and age <20

// } else {
//     console.log(firstName + 'is a man');
// }

/***********
 * Ternary Operators and Switch statements
 */

//  let firstName = 'Nope';
//  let age = 11111;

//  //Ternary operators
//  age >= 18 ? console.log(firstName + ' is 19')
//  :console.log(firstName + ' is old')

//  var drink = age >= 18 ? 'beer' : 'juice';
//  console.log(drink)

 //written in elifs
// if (age >= 18) {
//     var drink = 'beer';
// }
// else {
//     var drink = 'juice';
// }

//Switch statements
// var job = 'monster';
// switch ( job) {
//     case 'monster':
//     case 'teacher':
//         console.log(firstName + ' teaches children');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbn');
//         break;
//     case 'designer':
//         console.log(firstName + ' does nothing');
//         break;
//     default:
//         console.log(firstName + ' does something');
//     }

//     switch (true) {
//         case age < 13:
//             console.log(firstName +' is a bk');
//             break;
//         case age > 13 && age < 20:
//             console.log(firstName +  'isteen');
//             break;
//         default:
//             console.log(firstName + ' is w/e');

//     }

/**************************
 * Truthy and Falsy value and equality operators
 */ 

 // falsy values: undefined, null, 0, '', Nan
 // truthy values: NOT falsey values

//don't forget that zero is weird and we have to account for it once in a while
//  var height = 23;
//  height = 23;

//  if (height || height === 0 ) {
//      console.log('defined');
//  }
//  else {
//      console.log('undefined');
//  }
 
 // equality operators

//  if (height == '23') {
//      console.log ('the == operator does type cooercion');
//  }
// type cooercion (==) will convert a string to a number val
// (===) will see that a string != number 