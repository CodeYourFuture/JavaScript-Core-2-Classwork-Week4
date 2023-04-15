/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

// setInterval(function () {
//   var x = Math.floor(Math.random() * 256);
//   var y = Math.floor(Math.random() * 256);
//   var z = Math.floor(Math.random() * 256);
//   var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//   document.body.style.backgroundColor = bgColor;
// }, 5000);

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}
setInterval(changeColor, 5000);
