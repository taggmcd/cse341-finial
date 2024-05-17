const { response } = require('express');
const mongoose = require('mongoose');
const Movies = require('../models/movie');

const index = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Get all movies from mongodb
};

const show = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Get a single movie from mongodb
};

const store = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Create a new movie in mongodb
};

const update = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Update a movie in mongodb
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Movie']
  // Delete a movie from mongodb
};

module.exports = { index, show, store, update, destroy };
