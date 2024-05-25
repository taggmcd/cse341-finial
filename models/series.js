const mogoose = require('mongoose');

const SeriesSchema = new mogoose.Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: String,
    numberOfEpisodes: Number,
    plotSummary: String,
    posterUrl: String,
}, { versionKey: false });

module.exports = mogoose.model('series', SeriesSchema, 'series');