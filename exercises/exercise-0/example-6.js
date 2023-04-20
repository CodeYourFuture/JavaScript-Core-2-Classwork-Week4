let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

//1- let x with value 1 is a global scope which is not modified within the function
//2- The function "printCoordinates(point)" is a function scope declared only x coordinate because this block scope can only be accessed inside of that block of  {} brackets not outside of it.
// 3- The y variable will not be declared in the "printCoordinates(point)". Since y is passed as an argument and is accessed as a property of the point to the function so it will be searched in the global scope.
// 4- The "printCoordinates({ x: 10, y: 3 });" will not print any of the properties of the point because there is a let variable with the value of 2 inside the function. 