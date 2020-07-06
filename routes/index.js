module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/movies', require('../routes/movies/movies.routes.js'))
  app.use('/movies/details/:id', require('../routes/movies/movies.routes.js'))
  app.use('/profile', require('./user.routes'))
}
