const { response } = require('express');
const mongoose = require('mongoose');
const Book = require('../models/book');
const { getAndSendAll, getAndSendOne, deleteItemAndSendMessage } = require("./baseController");

const index = async (req, res) => {
  //#swagger.tags = ['Books']
  // Get all books from mongodb
  getAndSendAll(req, res, Book);
};

const show = async (req, res) => {
  //#swagger.tags = ['Books']
  // Get a single book from mongodb
  getAndSendOne(req, res, Book);
};

const store = async (req, res) => {
  //#swagger.tags = ['Books']
  // Create a new book in mongodb
  const { title, author, genre, publishedYear, isbn, description, coverImage } = req.body;
  try {
    const newBook = new Book({
        title,
        author,
        genre,
        publishedYear,
        isbn,
        description,
        coverImage,
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
} catch (error) {
    res.status(500).json({ error: 'Error creating book' });
}
};

const update = async (req, res) => {
  //#swagger.tags = ['Books']
  // Update a book in mongodb
  const bookId = new ObjectId(req.params.id)
  const { title, author, genre, publishedYear, isbn, description, coverImage } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(bookId, {title, author, genre, publishedYear, isbn, description, coverImage}, { new: true });
    res.status(204).json(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Books']
  // Delete a book from mongodb
  deleteItemAndSendMessage(req, res, Book);
};

module.exports = { index, show, store, update, destroy };
