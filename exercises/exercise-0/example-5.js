let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);

//map function is not being fed a parameter
//num will be set to the global 10
//you will get an array of 50, 50, 50, 50, 50