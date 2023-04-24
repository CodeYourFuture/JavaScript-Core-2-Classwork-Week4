/*

Exercise 3
----------

- Complete tasks 1-3. Task 4 is an optional extra.
- Open index.html using Live Server

You are given the following list of movies.

*/

const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

/*

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and for each movie, it creates a <p> element with the movie title and director and append it to the #allMovies div.
- it sets the innerText of the #moviesNumber element to the total number of the movies in the array "movies"

*/

function showMovies() {
  // add code here
  const divMovie = document.querySelector("#allMovies");
  movies.forEach((movie) => {
    const pElement = document.createElement("p");
    pElement.innerHTML = `${movie.title} by ${movie.director}`;
    divMovie.appendChild(pElement);
  });
  const moviesNumber = document.querySelector("#moviesNumber");
  moviesNumber.innerText = movies.length;
}
//showMovies(movies);
/*

Task 2
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovie to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

*/

const myFavMovie = {
  // add code here
  title: "The Pianist",
  director: "Roman Polanski",
  type: "biographical war-drama",
};

// function addMovie(movie, callback) {
//   // add code here
//   const divMovie = document.querySelector("#allMovies");
//   setTimeout(function () {
//     const pElement = document.createElement("p");
//     pElement.innerHTML = `${myFavMovie.title} by ${myFavMovie.director}`;
//     divMovie.appendChild(pElement);
//   }, 2000);
// }

// addMovie();
// showMovies();

/*

Task 3
Can you change the addMovie function to make sure the new movie you just added is showing on the screen?
Hint: use callbacks

*/

function addMovie(movie, callback) {
  // add code here
  setTimeout(function () {
    movies.push(movie);
    callback();
  }, 2000);
}

/*

Task 4 - **Extra**
- On the form with id #addMovies, add a "submit" event listener
- When the button is clicked you need to:
    - Read all input field values and create a new movie object literal with title, director, type and haveWatched properties
    - Push the new object on the movies array
    - Display the updated list of movies on your page

Hint: Use the functions you created on tasks 1-3

*/
function newMovie(event) {
  event.preventDefault();
  const movieObject = {};
  movieObject.title = document.querySelector("#title").value;
  movieObject.director = document.querySelector("#director").value;
  movieObject.type = document.querySelector(" #type").value;
  movieObject.haveWatched = document.querySelector("#haveWatched").checked;
  addMovie(movieObject, function () {
    const allMoviesList = document.querySelector("#allMovies");
    allMoviesList.innerHTML = ""; // Clear existing movie list
    showMovies();
  });
}

addMovie(myFavMovie, showMovies);
const submit = document.querySelector("#movie-submit");
submit.addEventListener("click", newMovie);
