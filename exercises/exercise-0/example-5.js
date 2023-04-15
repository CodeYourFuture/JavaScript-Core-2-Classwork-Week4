let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);
/* here the num variable it's not passed as an argument  in the function therefore it's not going to multiply the numbers on the array 
but only the num variable :10 and since it's mapped  it's going to give us [10,10,10,10,10]   */