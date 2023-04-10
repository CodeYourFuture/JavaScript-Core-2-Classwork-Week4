let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);

//[50, 50, 50, 50, 50]
// It will be implemented correctly because num is declared in global scope.
