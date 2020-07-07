const express = require('express')
const router = express.Router()

//const spotifyApi = require("../configs/spotify.config");

router.get('/', (req, res) => res.render('movies/movies'))
router.get('/movies/details/:id', (req, res) => res.render('details'))


module.exports = router