const express = require('express')
const Movie = require('../models/movie.model')
const User = require('../models/user.model')
const spotifyApi = require("../configs/spotify.config")

const router = express.Router()

router.get('/', (req, res) => res.render('movies/movies'))

router.get('/list', (req, res) => {
   //console.log('hola')
   Movie.find()
      .then(allMovies => res.render('movies/movies', { movies: allMovies }))
      .catch(err => next(new Error(err)))
})



router.get('/:id', (req, res, next) => {
   const moviePromise = Movie.findById(req.params.id)
   const spotifyPromise = Movie.findById(req.params.id)
      .then(data => spotifyApi.searchTracks(data.title))
      .then(data => data.body.tracks.items)
      .catch(err => next(new Error(err)))

   Promise.all([moviePromise, spotifyPromise])
      .then(results => {
         const movie = results[0]
         const spotify = results[1] ? results[1].slice(0, 4) : [""]
         res.render('movies/movies-details', { movie: movie, spotify: spotify })
      })
      .catch(err => next(new Error(err)))

})

module.exports = router







