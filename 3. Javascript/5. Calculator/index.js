//Create a function
function addTwoAndSeven() {
  return 2 + 7;
}

console.log(addTwoAndSeven);

//Second function
function addThreeAndFour() {
  return 3 + 4;
}

console.log(addThreeAndFour);

//Addition
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

//Subtraction
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

//Multiplication
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

//Division
function calculateQuotient(num1, num2) {
  let result;
  if (num === 0) {
    result = "Error Division by zero";
  } else {
    result = num1 / num2;
  }
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(7, 0));

//Square
function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

//Square Root
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
