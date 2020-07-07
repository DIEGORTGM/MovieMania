const express = require('express')
const Movie = require('../models/movie.model')
const User = require('../models/user.model')
const router = express.Router()

router.get('/', (req, res) => res.render('movies/movies'))

router.get('/list', (req, res) => {
    console.log('hola')
    Movie.find()
      .then(allMovies => res.render('movies/movies', { movies: allMovies }))
      .catch(err => next(new Error(err)))
   })



   router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
      .then(theMovie => res.render('movies/movies-details', { movie: theMovie }))
      .catch(err => next(new Error(err)))
   })
   

   
   

// const MovieDB_KEY = 'b635e44ba593a2590197e9c4632fdfab'
// const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=b635e44ba593a2590197e9c4632fdfab'



// Movie Search


// router.get('/search', (req, res) => {
//     const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=b635e44ba593a2590197e9c4632fdfab'
//     const searchEndpoint = searchURL + '&query=' + 'Matrix'
//     fetch(searchEndpoint)
//     // .then((res, req) => res.render())
//     .then((data) => {
//         console.log('Data: ', data)
//     })
//     .catch((err) => {
//         console.log('Error with search', err)
//     })
// })




module.exports = router