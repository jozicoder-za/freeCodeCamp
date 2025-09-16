let botName = "MathBot";
let greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object`;

console.log(`The Math.random() method returns a pseudo random number between 0 
    and less than 1`);

let randomNum = Math.random();
console.log(randomNum);

//Generate a random number between two values.
//It will generate floating point numbers
console.log(`Now, generate a random number between two values`);
let min = 1;
let max = 100;
let randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

//Working with Math.floor for the random numbers
console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer."
);
let numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

//Introducing the Math.ceil() method
console.log(
  "The math.ceil() method rounds the value up to the nearest whole integer"
);
let numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

//Round numbers to the nearest whole integer

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);
let numRounded = Math.round(2.7);
console.log(numRounded);
let numRounded2 = Math.round(11.2);
console.log(numRounded2);

//Minimum and Maximum numbers
let maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
let minNum = Math.min(3, 90, 14, 90, 2);
console.log(minNum);
