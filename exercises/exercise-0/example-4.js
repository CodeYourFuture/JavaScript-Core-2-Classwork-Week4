let num = 10;

const result = [1, 2, 3, 4, 5].map(function multiplyBy5(num) {
  return num * 5;
});

console.log(result);

//will print 5,10,15,20,25
//because variable was defined  before map
