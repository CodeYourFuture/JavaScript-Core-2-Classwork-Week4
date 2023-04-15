let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);

// num 10 is global
// map is not fed
// array of 50, 50, 50, 50, 50
