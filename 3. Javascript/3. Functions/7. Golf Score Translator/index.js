const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  let result;
  if (strokes === 1) {
    result = names[0];
  } else if (strokes <= par - 2) {
    result = names[1];
  } else if (strokes === par - 1) {
    result = names[2];
  } else if (strokes === par) {
    result = names[3];
  } else if (strokes === par + 1) {
    result = names[4];
  } else if (strokes === par + 2) {
    result = names[5];
  } else if (strokes >= par + 3) {
    result = names[6];
  }
  return result;
}

console.log(golfScore(1, 1));
console.log(golfScore(3, 1));
console.log(golfScore(4, 1));
console.log(golfScore(5, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(3, 2));
console.log(golfScore(4, 3));
console.log(golfScore(5, 4));
console.log(golfScore(3, 3));
console.log(golfScore(4, 4));
console.log(golfScore(5, 5));
console.log(golfScore(3, 4));
console.log(golfScore(4, 5));
console.log(golfScore(5, 6));
console.log(golfScore(3, 5));
console.log(golfScore(4, 6));
console.log(golfScore(5, 7));
console.log(golfScore(3, 7));
console.log(golfScore(4, 8));
console.log(golfScore(5, 9));
