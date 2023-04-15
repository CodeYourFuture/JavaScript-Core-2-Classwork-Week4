/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
//1
// function changeBackground(){
//    document.body.style.background = "indigo"
//   }
//   setTimeout(changeBackground,5000);

//2

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeColor, 500);