// let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);
//the first occurrence of num is a global variable that is declared and assigned the value of 10. The second occurrence of num is a parameter of the callback function multiplyBy5 that is defined inside the map() method.
//output: [5, 10, 15, 20, 25]
