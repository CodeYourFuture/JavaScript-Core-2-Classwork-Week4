let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
console.log(y);

// We start with a num variable -global variable - it is valid for all code while the second variable is only valid inside the bracket
// we have a function with parameter point to coordinate. it takes the next variable -inside brackets -  and put into the console log with ${y}. 
// we console log inside the bracket and print The x coordinate is 10 AND The y coordinate is 3. 
// The y variable inside the brackets is not a global variable so console.log on row 10 cannot declare and will print undefined 
// And console.log on row 11 will print Reference error cause y is not a global variable. 
