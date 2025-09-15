let fortune1 =
  "You will soon embark on a journey that changes your perspective.";
let fortune2 = "A surprise encounter will bring unexpected joy into your life.";
let fortune3 = "Financial opportunities are headed your way—be ready to act.";
let fortune4 = "Someone close to you has been silently cheering you on.";
let fortune5 = "You will discover a hidden talent that leads to success.";

let randomNumber = Math.round(Math.random() * 5) + 1;
console.log(randomNumber);
let selectedFortune;
if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);

console.log(5 == "5");
