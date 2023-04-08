let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5() {
  return num * 5;
});

console.log(result);


//expected output: [50,50,50,50,50]
//as mention previous example , first num variablr the  multiplyBy5 find is global scoped 'num'