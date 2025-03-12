import { addMovie, rateMovie, getAverageRating, getTopRatedMovies, getMoviesByGenre, getMoviesByDirector, searchMoviesBasedOnKeyword, getMovie, removeMovie } from "./movies_management";

// Adding movies
addMovie("1", "Inception", "Christopher Nolan", 2010, "Sci-Fi");
addMovie("2", "Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
addMovie("3", "The Dark Knight", "Christopher Nolan", 2008, "Action");

// Rating movies
rateMovie("1", 5);
rateMovie("2", 4);
rateMovie("3", 5);
rateMovie("1", 4);

// Fetching details
console.log("Average rating of Inception:", getAverageRating("1"));
console.log("Top rated movies:", getTopRatedMovies());
console.log("Movies by genre 'Sci-Fi':", getMoviesByGenre("Sci-Fi"));
console.log("Movies by Christopher Nolan:", getMoviesByDirector("Christopher Nolan"));
console.log("Search movies with 'Dark':", searchMoviesBasedOnKeyword("Dark"));

// Fetching a specific movie
console.log("Details of movie with ID 1:", getMovie("1"));

// Removing a movie
removeMovie("2");
console.log("Movies after removing ID 2:", getTopRatedMovies());
