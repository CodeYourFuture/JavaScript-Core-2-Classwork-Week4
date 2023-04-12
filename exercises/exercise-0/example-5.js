let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);

//result is gonna be a new array [50, 50, 50, 50, 50], we are not passing 
//the number as an argument of the function, that is means we will replace 
//each number in the array with a new number of multiplying global var * 5, each time the same