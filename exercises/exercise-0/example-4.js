let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

/*it will print an array with the result of the numbers inside the array multiplied by 10
the num variable it's a global one which has been passed as an argument on the function*/