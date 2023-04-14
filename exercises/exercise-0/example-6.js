let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });



// We start with a num variable -global variable - it is valid for all code while the second variable is only valid inside the bracket
// we have a function with parameter point to coordinate. it takes the next variable -inside brackets -  and put into the console log with ${x}. 
// Console.log y is not declared in the function. we then print the coordinates and the outcome will be: 
// The x coordinate is 2 AND since y is not declared it will print Reference error 
