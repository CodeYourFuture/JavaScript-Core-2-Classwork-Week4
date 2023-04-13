let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);
//out put:
//[50, 50, 50, 50, 50];
//for  each item from array Javascript call function multiplyBy5 without getting 
//any parameter and the num that we use in this function is 10 
//because we had this num in global scope