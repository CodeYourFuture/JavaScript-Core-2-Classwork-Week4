let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);


// We start with a num variable. We have a const variable contain an array of numbers. .map method use the function and multiply all numbers in the array with 10. 
// The array will then be [10, 20, 30, 40, 50]. We then return these number and multiply by 5. console.log then print the outcome of the array result [50, 100, 150, 200, 250]
