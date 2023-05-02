let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);
// Will return array with numbers as well, but "num" always be 10, as we didn't set parametr for function.