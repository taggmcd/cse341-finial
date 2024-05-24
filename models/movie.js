const mogoose = require('mongoose');

const MovieSchema = new mogoose.Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genres: [{ type: String }],
    runtime: Number,
    rated: String,
    plot: String,
    posterUrl: String,
});

module.exports = mogoose.model('movie', MovieSchema, 'movies');
