const mongoose = require('mongoose')
const Movie = require('../models/movie.model')
const User = require('../models/user.model')
const router = require('../routes/index.routes')

const dbtitle = 'movie-database'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

Movie.collection.drop()
User.collection.drop()

const listMovies = [{
    title: 'Goodfellas',
    director: 'Martin Scorsese',
    duration: 146,
    cast: ['Robert De Niro, Ray Liotta, Joe Pesci, ...'],
    synopsis: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    rating: 8.7
},
{
    title: 'Interstellar',
    director: 'Christopher Nolan',
    duration: 169,
    cast: ['Matthew McConaughey, Anne Hathaway, Jessica Chastain, ...'],
    synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
    rating: 8.6
},
{
    title: 'Love Actually',
    director: 'Richard Curtis',
    duration: 135,
    cast: ['Hugh Grant, Martine McCutcheon, Liam Neeson, ...'],
    synopsis: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
    rating: 7.6
},
{
    title: 'Happy Gilmore',
    director: 'Dennis Dugan',
    duration: 92,
    cast: ['Adam Sandler, Christopher McDonald, Julie Bowen, ...'],
    synopsis: 'A rejected hockey player puts his skills to the golf course to save his grandmothers house.',
    rating: 7.0
},
{
    title: 'Django Unchained',
    director: 'Quentin Tarantino',
    duration: 165,
    cast: ['Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, ...'],
    synopsis: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
    rating: 8.4
},
{
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    duration: 144,
    cast: ['Tim Robbins, Morgan Freeman, Bob Gunton, ...'],
    synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3
},
{
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    duration: 152,
    cast: ['Christian Bale, Heath Ledger, Aaron Eckhart , ...'],
    synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 9.0
},
{
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    duration: 175,
    cast: ['Marlon Brando, Al Pacino, James Caan , ...'],
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2
},
{
    title: 'The Godfather: Part II',
    director: 'Francis Ford Coppola',
    duration: 202,
    cast: ['Al Pacino, Robert De Niro, Robert Duvall, ...'],
    synopsis: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    rating: 9.0
},
{
    title: '12 Angry Men',
    director: 'Sidney Lumet',
    duration: 156,
    cast: ['Henry Fonda, Lee J. Cobb, Martin Balsam , ...'],
    synopsis: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    rating: 8.9
},
{
    title: "Schindler's List",
    director: 'Steven Spielberg',
    duration: 195,
    cast: ['Liam Neeson, Ralph Fiennes, Ben Kingsley, ...'],
    synopsis: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    rating: 8.9
},
{
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    duration: 154,
    cast: ['John Travolta, Uma Thurman, Samuel L. Jackson, ...'],
    synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 8.9
},
{
    title: 'The Good, the Bad and the Ugly',
    director: 'Sergio Leone',
    duration: 178,
    cast: [' Clint Eastwood, Eli Wallach, Lee Van Cleef, ...'],
    synopsis: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
    rating: 8.8
},
]



Movie.create(listMovies)
    .then(allMovies => {
        console.log("These movies have been created: ", allMovies)
        mongoose.connection.close(() => console.log("Conection closed after the seed"))
    })
    .catch(err => console.log("There was an error creating the movies.", err)) 



    
          