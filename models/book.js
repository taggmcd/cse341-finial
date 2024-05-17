const mogoose = require('mongoose');

const BookSchema = new mogoose.Schema({});

module.exports = mogoose.model('book', BookSchema, 'books');
