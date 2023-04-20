let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);


// 1- The num variable with the 10 value and the "multiplies" function are outer or global scope.
// 2- map() method returns a new array and multiplies each element of the by 5.
//3- The function passed to the map() method returns num * 5
// 4- The function takes no arguments and return the result.
// 5- console.log statement outputs the result array to the console.




