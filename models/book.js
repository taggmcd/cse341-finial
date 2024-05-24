const mogoose = require('mongoose');

const BookSchema = new mogoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: String,
    publishedYear: Number,
    isbn: String,
    description: String,
    coverImage: String,
});

module.exports = mogoose.model('book', BookSchema, 'books');
