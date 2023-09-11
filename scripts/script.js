
const c = +prompt('How many films have you seen?');

const personalMovieDB = {
	count: c,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



const lastSeenMovie = prompt('What is the last movie you have seen?', '');
const movieRate = prompt('Please rate the movie from 1 to 10.', '');
const lastSeenMovie_1 = prompt('What is the last movie you have seen?', '');
const movieRate_2 = prompt('Please rate the movie from 1 to 10.', '');

personalMovieDB.movies[lastSeenMovie] = movieRate;
personalMovieDB.movies[lastSeenMovie_1] = movieRate_2;

console.log(personalMovieDB);