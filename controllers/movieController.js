const { response } = require('express');
const mongoose = require('mongoose');
const Movies = require('../models/movie');
const { getAndSendAll, getAndSendOne, deleteItemAndSendMessage } = require("./baseController");

const index = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Get all movies from mongodb
  getAndSendAll(req, res, Movie);
};

const show = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Get a single movie from mongodb
  getAndSendOne(req, res, Movie);
};

const store = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Create a new movie in mongodb
  try {
    const { title, releaseYear, genres, runtime, rated, plot, posterUrl } = req.body;
    const newMovie = new Movies({
        title,
        releaseYear,
        genres,
        runtime,
        rated,
        plot,
        posterUrl,
    });
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
} catch (error) {
    res.status(500).json({ error: 'Error creating movie' });
}
};

const update = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Update a movie in mongodb
  const movieId = new ObjectId(req.params.id)
  const { title, releaseYear, genres, runtime, rated, plot, posterUrl } = req.body;
  try {
    const movie = await Movies.findByIdAndUpdate(movieId, {title, releaseYear, genres, runtime, rated, plot, posterUrl}, { new: true });
    res.status(204).json(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Delete a movie from mongodb
  deleteItemAndSendMessage(req, res, Movie);
};

module.exports = { index, show, store, update, destroy };
