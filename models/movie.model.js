const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    director: String,
    duration: Number,
    cast: [String],
    synopsis: String,
    rating: Number
}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie
