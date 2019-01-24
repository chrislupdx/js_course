
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

 var firstName = 'John';
 var age = 28;

 console.log(firstName + ' ' + age);
// type cooercion example with isMarried via false/undefined toggle
 var job, isMarried;
 job = 'teacher';
 isMarried = false;
//  delcaring multiple variables works like ^

console.log(firstName + ' is a ' + age + 'year old ' + job + '. is he married?' + isMarried);

// Var mutation (changing the value of a variable)
age = "five";
// since we already declared it, there's no need to var #dynamic typing
job = 'monster';

alert(firstName + ' is a ' + age + 'year old ' + job + '. is he married?' + isMarried);

var lastname = prompt("what is his last name");
//PROMPT IS SO COOL
console.log(firstName + ' ' + lastname);
