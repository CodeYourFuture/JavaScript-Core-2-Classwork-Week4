let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

// the console.log first "The x coordinate is 2"
// the second console.log Undefined
//I think let x = 2 is a priority for the function and we are not assigning 
//"y" to anything and we are not calling the argument of the function anywhere

