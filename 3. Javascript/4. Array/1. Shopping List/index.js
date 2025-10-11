// Step 1
console.log("Grocery Shopping List");

// Step 2
let shoppingList = [];

// Step 3
console.log("It will be nice to have some fruit to eat");

// Step 4
shoppingList.push("Apples");

// Step 5
function getShoppingListMsg(arr) {
  return `Current Shopping List - ${arr}`;
}

// Step 6
console.log(getShoppingListMsg(shoppingList));

// Step 7
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

// Step 8
console.log("It looks like we need to get some cooking oil");

// Step 9
shoppingList.unshift("Vegetable Oil");

// Step 10
console.log(getShoppingListMsg(shoppingList));

// Step 11
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");

// Step 12
console.log(getShoppingListMsg(shoppingList));

// Step 13
console.log("This looks like too much junk food.");

// Step 14
shoppingList.pop();

// Step 15
console.log(getShoppingListMsg(shoppingList));

// Step 16
console.log("It might be nice to get a dessert");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

// Step 17
console.log("On Second thought, maybe wwe should be more health conscious");

// Step 18
shoppingList.shift();

// Step 19
shoppingList[0] = "Canola Oil";

// Step 20
console.log(getShoppingListMsg(shoppingList));
