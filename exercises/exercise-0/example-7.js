let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates()); // error coz no argument passed here // oops it works x = 10 and y = 3
console.log(y); // error coz y is not defined glabally
