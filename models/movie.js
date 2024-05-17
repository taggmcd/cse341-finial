const mogoose = require('mongoose');

const MovieSchema = new mogoose.Schema({});

module.exports = mogoose.model('movie', MovieSchema, 'movies');
