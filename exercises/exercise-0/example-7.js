let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
console.log(y);
//console.log(printCoordinates()):
//the function will access the global variable x and the local variable y defined within the function, respectively.
//output: the x coordinate is 10 - the y coordinate is 3
//(figured out after running) undefined=>there is no explicit return statement in the function, it returns undefined by default.
//the console.log(y)==> y is not accessible outside the function.so the error is: y is not defined.
