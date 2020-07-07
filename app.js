require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)


// Routes index
require('./routes')(app)

//Movie Search 
const MovieDB_KEY = 'b635e44ba593a2590197e9c4632fdfab'
const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=b635e44ba593a2590197e9c4632fdfab'

// const buttonElement = document.querySelector('#search')
// const inputElement = document.querySelector('#inputValue')
// const movieSearchable = document.querySelector('#movie-searchable')

// buttonElement.onclick = function(event) {
//     event.preventDefault(); 
//     const value = inputElement.value;

    // const searchEndpoint = searchURL + '&query=' + value

    // fetch(searchEndpoint)
    //     // .then((res, req) => res.render())
    //     .then((data) => {
    //         console.log('Data: ', data)
    //     })
    //     .catch((err) => {
    //         console.log('Error with search', err)
    //     })
// }


// function MovieSection(movies) {
//      return movies.map((movie) => {
//         return `
//         <img src=${movie.poster_path} data-movie-id=${movie.id}/>
//         `;
//     })
// }

// function createPoster(movies) {
// const movieElement = document.createElement('div');
// movieElement.setAttribute('class', 'movie')

// const movieTemplate = `
//     <section class="section">
//     ${MovieSection(movies)}
//     </section>
//     `;

//     movieElement.innerHTML = movieTemplate
//     return movieElement;
// }



// buttonElement.onclick = function(event) {
//     event.preventDefault(); 
//     const value = inputElement.value;

//     const searchEndpoint = searchURL + '&query=' + value

//     fetch(searchEndpoint)
//         .then((res, req) => res.json())
//         .then((data) => {
//             // data.results []
//             const movies = data.results
//             const movieBlock = createPoster(movies)
//             movieSearchable.appendChild(movieBlock)
//             console.log('Data: ', data)
//         })
//         .catch((err) => {
//             console.log('Error with search', err)
//         })
// }
//Spotify API
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
});

spotifyApi
    .clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(error => console.log('Something went wrong when retrieving an access token', error));


module.exports = app
