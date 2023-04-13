let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
//out put:
//The x coordinate is 10
//The y coordinate is 3
console.log(y);
//out put:
//undefined 
//because we dont have acces to variables that are defined in functions