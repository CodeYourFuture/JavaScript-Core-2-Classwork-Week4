let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);


// 1- The first variable num with the value of 10 and a keyword 'let' shows that it is a block scope variable. It can only be accessed within the block scope where it is defined.  

// 2- The function multiplyBy5 is a lexical scope and it has a access to the num parameter passed to it. And log the const result variable in the console.
