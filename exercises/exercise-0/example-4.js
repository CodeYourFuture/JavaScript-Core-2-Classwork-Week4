let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

//This will console log out a new array result of the multiplication of each item of array by 5
// due to the variable num declared on the function will take priority over the one
//declared in the global scope
