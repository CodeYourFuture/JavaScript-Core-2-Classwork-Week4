/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

function changeBgrColor() {
  const colors = ["blue", "purple", "green", "yellow", "orange"] ;
  const getRandomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector("#main").style.backgroundColor = getRandomColor
}

setTimeout(() => {
  changeBgrColor();
}, 5000);

setInterval(() => {
  changeBgrColor();
}, 5000);
