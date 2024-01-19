console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  if (count > 0) {
    for (i = 1; i <= count; i++) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  } else {
    for (i = -1; i >= count; i--) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
}
printOdds(-20);
printOdds(20);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age >= 16) {
    console.log(aboveSixteen);
  } else if (age < 16) {
    console.log(belowSixteen);
  }
}

checkAge("Bob", 35);
checkAge("John", 14);

function coordinates(x, y) {
  if (x == 0 && y == 0) {
    console.log("The point is at (0,0) at the orgin");
  } else if (x == 0) {
    console.log(`The point (${x}, ${y}) is on the y-axis.`);
  } else if (y == 0) {
    console.log(`The point (${x}, ${y}) is on the x-axis.`);
  } else if (x > 0 && y > 0) {
    console.log(`The point (${x}, ${y}) is in Quadrant I.`);
  } else if (x < 0 && y > 0) {
    console.log(`The point (${x}, ${y}) is in Quadrant II.`);
  } else if (x < 0 && y < 0) {
    console.log(`The point (${x}, ${y}) is in Quadrant III.`);
  } else if (x > 0 && y < 0) {
    console.log(`The point (${x}, ${y}) is in Quadrant IV.`);
  }
}

coordinates(1,2);
coordinates(-3,4);
coordinates(0,0);

function triangle (a,b,c) {
    if ((a + b <= c || a + c <= b || b + c <= a)){
        console.log("that is not a valid triangle");
    } else {
        console.log("that is a valid triangle");
        if(a == b && b == c){
            console.log("and it is an equilateral");
        } else if (a == b || b == c || a == c) {
            console.log("and it is an isosceles");
        } else{
            console.log("and it is a scalene")
        }
    }
}

triangle(1,2,2);
triangle(3,3,3);
triangle(58,200,40);
triangle(4,3,5);
