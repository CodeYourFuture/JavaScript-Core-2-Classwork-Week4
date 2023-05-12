/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

let mainEl = document.getElementById("main");

// setTimeout(function () {
//   mainEl.style.backgroundColor = "purple";
// }, 5000);

setInterval(function () {
  mainEl.style.backgroundColor = getRandomColor();
}, 2000);

function getRandomColor() {
  // Generate random values for each RGB component
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Combine the RGB components into a CSS color string
  const color = `rgb(${r}, ${g}, ${b})`;

  // Return the random color
  return color;
}
