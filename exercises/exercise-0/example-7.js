let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
console.log(y);


// output is :
// The x coordinate is 10
// The y coordinate is 3
// undefined

// function using x as global var and y as local var 

// undefined come from console log y becouse y is local var 