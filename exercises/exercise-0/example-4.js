let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

//expected output: [5, 10, 15, 20, 25]
// map() method changes all elements in the array according to its input func
//and that function takes its input 'num', if it wouldnt exist would take num variable that is 10