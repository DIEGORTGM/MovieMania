const express = require('express')
const Movie = require('../models/movie.model')
const { response } = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('movies/movies'))

router.get('/list', (req, res) => {
   Movie.find()
      .then(allMovies => res.render('movies/movies', {
         movies: allMovies
      }))
      .catch(err => next(new Error(err)))
})



router.get('/details/:id', (req, res) => {
   Movie.findById(req.params.id)
      .then(theMovie => res.render('movies/movies-details', {
         movie: theMovie
      }))
      .catch(err => next(new Error(err)))
})

// Movie Search //


router.post("/list", (req, res) => {
   const {
      searchInput
   } = req.body;
   const regex = new RegExp(escapeRegex(searchInput), 'gi');
   Movie.find({
         "title": regex
      })
      .then(movieSearch => res.render('movies/movies', {movies: movieSearch}))
      .catch(err => (new Error(err)))
})

function escapeRegex(text) {
   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.exports = router

