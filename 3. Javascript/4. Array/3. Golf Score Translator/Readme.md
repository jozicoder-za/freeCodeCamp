## Build a Golf Score Translator

In the game of Gold, each hole has a `par`, meaning the average number of `strokes` a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.

In the challenge you will write a function that converts the `par` and `strokes` to their nickname.

### Step 1

You should create a function named `golfScore`.

### Step 2

`golfScore` should take two numeric arguments, which are the par for the course and the amount of strokes made.

### Step 3

`golfScore` should return a string.

### Step 4

`golfScore` should return `"Hole-in-one!"` if `strokes` is `1`.

### Step 5

`golfScore` should return `"Eagle"` if `strokes` is less than or equal to `par` minus `2`.

### Step 6

`golfScore` should return `"Birdie"` if `strokes` is equal to `par` minus `1`.

### Step 7

`golfScore` should return `Par"` if `strokes` is equal to `par`.

### Step 8

`golfScore` should return `"Bogey"` if `strokes` is equal to `par` plus `1`.

### Step 9

`golfScore` should return `"Double Bogey"` if `strokes` is equal to `par` plus `2`.

### Step 10

`golfScore` should return `"Go Home!"` if `strokes` is greater than or equal to `par` plus `3`.
