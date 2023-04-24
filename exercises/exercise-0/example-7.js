let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
console.log(y);

//The first console.log will print out the x coordinate with a value of 10
//(this variable was declared in global scope so it can be accessed anywhere in the code)
//and the y coordinate with the value of 3 since it was declared and accessed inside the function
//the second console log will give an error of y not defined
//because since it was declared inside a function, we cannot access it outside of it.
