/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

// setTimeout(function () {
//   var x = Math.floor(Math.random() * 256);
//   var y = Math.floor(Math.random() * 256);
//   var z = Math.floor(Math.random() * 256);
//   var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//   document.body.style.backgroundColor = bgColor;
// }, 5000);

setInterval(function () {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.backgroundColor = bgColor;
}, 5000);

