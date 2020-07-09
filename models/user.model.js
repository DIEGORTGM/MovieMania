const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    imagePath: String,
    password: String,
    imagePath: {
        type: String,
        default: 'images/avatar.png'
    }

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User

