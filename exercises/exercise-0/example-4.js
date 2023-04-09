let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

//num ignores the global let and takes the value of the array items
// result will be an array containing 5,10,15,20,25