let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);


// output is :
//[ 50, 50, 50, 50, 50 ]

// Number of array come from map method 
// using null as parameter for looping of array and multiply by 5 by num variable
//  