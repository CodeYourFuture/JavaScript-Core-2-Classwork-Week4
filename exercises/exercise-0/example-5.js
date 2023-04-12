let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);
//num is global and accessible inside the function.
//map creates a new array called result =>[ , , , , ]
//the input is [1, 2, 3, 4, 5], but there is no any parameter inside the callback function
//so the global num is multiplied 5, for five times and added to the result array
//[50, 50, 50, 50,50]
