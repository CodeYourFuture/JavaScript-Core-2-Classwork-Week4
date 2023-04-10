let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

// [5, 10, 15, 20, 25]
// It will be implemented correctly because num each time will be one of the array's index that we map on it.
