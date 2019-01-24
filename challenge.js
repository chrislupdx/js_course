/******
 * Challenge #1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated  using the formula: BMI = mass / height^2 = mass / (height * height) (mass in kg and neight in meter)

1. Store mark and john's mass and height in the variables
2. calculate both bmis
3. create a boolean variable containing information about whether mark has a greater gmi than john
4. print a string to the console containing the variable from 3

*/

const markheight = 125; 
const markweight = 77;

const johnheight = 1211;
const johnweight = 121131;

markBMI = markweight / (markheight * markheight);
console.log("markBMI is " + markBMI);

johnBMI = johnweight / (johnheight * johnheight );
console.log("johnBMI is " + johnBMI);