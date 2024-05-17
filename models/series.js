const mogoose = require('mongoose');

const SeriesSchema = new mogoose.Schema({});

module.exports = mogoose.model('series', SeriesSchema, 'series');
