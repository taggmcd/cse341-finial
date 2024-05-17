const { response } = require('express');
const mongoose = require('mongoose');
const Series = require('../models/series');

const index = async (req, res) => {
  //#swagger.tags = ['Series']
  // Get all series from mongodb
};

const show = async (req, res) => {
  //#swagger.tags = ['Series']
  // Get a single series from mongodb
};

const store = async (req, res) => {
  //#swagger.tags = ['Series']
  // Create a new series in mongodb
};

const update = async (req, res) => {
  //#swagger.tags = ['Series']
  // Update a series in mongodb
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Series']
  // Delete a series from mongodb
};

module.exports = { index, show, store, update, destroy };
