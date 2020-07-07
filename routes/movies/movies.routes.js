const express = require('express')
const router = express.Router()

router.get('/movies', (req, res) => res.render('movies'))
router.get('/movies/details/:id', (req, res) => res.render('details'))


module.exports = router