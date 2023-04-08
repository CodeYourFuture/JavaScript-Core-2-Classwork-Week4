let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

//expected output: `The y coordinate is 2`, and an error for y because it's not defined
//x takes value 2, not 1 because 1(global) < 2(func) 
// however if it's written like ${point.x} it would take value 10
// same for y ${point.y} y would take 3
