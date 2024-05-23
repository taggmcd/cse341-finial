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
};

const update = async (req, res) => {
  //#swagger.tags = ['Books']
  // Update a book in mongodb
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Books']
  // Delete a book from mongodb
  deleteItemAndSendMessage(req, res, Book);
};

module.exports = { index, show, store, update, destroy };
