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
- iterates through the "movies" array and for each movie, it creates a <p> element 
  with the movie title and director and append it to the #allMovies div.
- it sets the innerText of the #moviesNumber element to the total number of the movies 
in the array "movies"

*/

function showMovies(movies) {
  //list movie's title and director
  let numberOfMovies = 0;
  let allMovies = document.getElementById("allMovies");
  allMovies.innerHTML = "";
  for (let movie of movies) {
    let pEl = document.createElement("p");
    pEl.innerText = `Title: ${movie.title}. Director: ${movie.director}`;
    allMovies.appendChild(pEl);
    numberOfMovies++;
  }

  //number of movies inside p element
  let numberOfMoviesEl = document.getElementById("moviesNumber");
  numberOfMoviesEl.innerText = numberOfMovies;
}

/*

Task 2
Create a new function called "addMovie"
- it receives a movie object as an argument - 
your can create a new object for your favorite movie following using the "myMovies" objects as a guide
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovie to add the new movie to the list 
and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

still 4 movies as its adding the new one after rendering the page 

*/

const myFavMovie = {
  // add code here
  title: "Wonder",
  director: "Director Name ",
  type: "Drama",
  haveWatched: true,
};
// addMovie(myFavMovie);

// function addMovie(movie) {
//   setTimeout(function () {
//     movies.push(movie);
//   }, 2000);

//   showMovies(newSetOfMovies);
// }
//commented out addMovie as another function is used addMovie1
/*

Task 3
Can you change the addMovie function to make sure the new movie you just added is showing on the screen?
Hint: use callbacks

*/

function addMovie1(movie) {
  //will try it without the setTimeout to make it better
  //there is error while trying to add -- maybe because of i removed the timer?
  movies.push(movie);
  console.log(movies);
  showMovies(movies);

  // setTimeout(function () {
  //   movies.push(movie);
  //   showMovies(movies);
  // }, 2000);
  // -------
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

function submit() {
  let formEl = document.getElementById("addMovies");

  //declare all elements and attach event listener to the button -- changed here
  // attached the event listener to the form and used submit instead of click
  let titleEl = document.getElementById("title");
  let directorEl = document.getElementById("director");
  let typeEl = document.getElementById("type");
  let watchedEl = document.getElementById("haveWatched");
  let submitEl = document.getElementById("movie-submit");

  formEl.addEventListener("submit", function (event) {
    event.preventDefault(); //to solve refreshing the page after clicking on submit

    let newMovieFromUserForm = {
      title: titleEl.value,
      director: directorEl.value,
      type: typeEl.value,
      haveWatched: watchedEl.checked, // checkbox should be .checked instead of value to give us boolean
    };

    addMovie1(newMovieFromUserForm);
  });
}

showMovies(movies);
addMovie1(myFavMovie);
submit();
