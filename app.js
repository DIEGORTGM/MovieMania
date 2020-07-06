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

const buttonElement = document.querySelector('#search')
const inputElement = document.querySelector('#inputValue')

buttonElement.onclick = function(event) {
    event.preventDefault(); 
    const value = inputElement.value;

    const searchEndpoint = searchURL + '&query=' + value

    fetch(searchEndpoint)
        .then((res, req) => res.json())
        .then((data) => {
            console.log('Data: ', data)
        })
        .catch((err) => {
            console.log('Error with search', err)
        })

}

module.exports = app
