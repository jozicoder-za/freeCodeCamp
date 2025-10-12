// Step 1
let lunches = [];

// Step 2
function addLunchToEnd(arr, str) {
  arr.push(str);
  return `${str} added to the end of the lunch menu Array:${arr}`;
}

console.log(addLunchToEnd(lunches, "Pizza"));
console.log(addLunchToEnd(lunches, "Chicken Curry"));

// Step 3
function addLunchToStart(arr, str) {
  arr.unshift(str);
  return `${str} added to the start of the lunch menu Array:${arr}`;
}

console.log(addLunchToStart(lunches, "Pasta"));

// Step 4
function removeLastLunch(arr) {
  if (arr.length < 1) {
    return `No lunches to remove`;
  }

  let lastItem = arr.pop();
  return `${lastItem} removed from the end of the lunch menu`;
}

console.log(removeLastLunch(lunches));

// Step 5
function removeFirstLunch(arr) {
  if (arr.length < 1) {
    return `No Lunches to remove`;
  }
  let firstItem = arr.shift();
  return `${firstItem} removed from the start of the lunch menu.`;
}

console.log(removeFirstLunch(lunches));
