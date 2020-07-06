const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

const cloudUploader = require('../configs/cloudinary.config')


router.get('/', (req, res) => {
    // TO-DO necesito recoger datos del usario de la base de datos
    res.render('auth/profile')
    console.log(req.user);

})



router.post('/imagen', cloudUploader.single('imageFile'), (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { imagePath: req.file.url })
        .then(() => res.redirect('/profile'))
        .catch(err => next(new Error(err)))

})


module.exports = router


