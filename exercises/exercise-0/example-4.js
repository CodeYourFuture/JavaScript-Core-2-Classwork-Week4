let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

// We start with a num variable (not used in this code snippet). We have a const variable contain an array of numbers. .map method use the function and multiply all numbers in the array with 5. 
// The array will then be [5, 10, 15, 20, 25]. console.log then print the outcome of the array result [5, 10, 15, 20, 25]
