let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);

//In this case function in the map method, is calling the num variable declared in the global scope
//multiplying by 5 and assigning this value to each item of the array
//returning a new array that will look: [50,50,50,50,50]
