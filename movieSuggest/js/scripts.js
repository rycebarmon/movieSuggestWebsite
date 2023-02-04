let movies = [];
let movieData = {};

function getMovie() {
    $.ajax({
        url: "https://api.themoviedb.org/3/discover/movie",
        type: "GET",
        data: {
            api_key: "0be7213bed8bd2d020a65177886d3376",
            language: "en-US",
            include_adult: false,
            include_video: false,
            page: 2
        },
        success: function (data) {
            movieData = data;

            for (let i = 0; i < movieData.results.length; i++) {
                let currentMovie = movieData.results[i];
                const movie = {
                    backdrop_path: currentMovie.backdrop_path,
                    genre_ids: currentMovie.genre_ids,
                    id: currentMovie.id,
                    original_language: currentMovie.original_language,
                    original_title: currentMovie.original_title,
                    overview: currentMovie.overview,
                    popularity: currentMovie.popularity,
                    poster_path: currentMovie.poster_path,
                    release_date: currentMovie.release_date,
                    title: currentMovie.title,
                    video: currentMovie.video,
                    vote_average: currentMovie.vote_average,
                    vote_count: currentMovie.vote_count
                };

                movies.push(movie);
            }
            console.log(movies);
        },
        error: function (xhr, status, error) {
            console.error(status + ": " + error);
        }
    });
}


$(document).ready(function () {
    getMovie();
});


$(document).ready(function () {
    $("button").click(function () {
        if (movies.length > 0) {
            let movieOnDisplay = movies.pop();
            let movieInfo = "";
            for (let prop in movieOnDisplay) {
                    movieInfo += prop + ": " + movieOnDisplay[prop] + "<br>" + "<br>";
                }
            document.getElementById("displayMovieInfo").innerHTML = movieInfo;
            }

        else {
            console.log("No more movies to display");
        }
    });
});









