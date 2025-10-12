// Step 1
let lunches = [];

// Step 2
function addLunchToEnd(arr, str) {
  arr.push(str);
  return `${str} added to the end of the lunch menu Array:${arr}`;
}

console.log(addLunchToEnd(lunches, "Pizza"));

// Step 3
function addLunchToStart(arr, str) {
  arr.unshift(str);
  return `${str} added to the start of the lunch menu Array:${arr}`;
}

console.log(addLunchToStart(lunches, "Pasta"));
