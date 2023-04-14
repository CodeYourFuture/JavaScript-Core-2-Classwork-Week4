let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

// output is :
// [ 5, 10, 15, 20, 25 ]
// Number of array come from map method 
// using num as parameter for looping of array and multiply by 5