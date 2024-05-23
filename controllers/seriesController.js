const { response } = require('express');
const mongoose = require('mongoose');
const Series = require('../models/series');
const { getAndSendAll, getAndSendOne } = require("./baseController");


const index = async (req, res) => {
  //#swagger.tags = ['Series']
  // Get all series from mongodb
  getAndSendAll(req, res, Series);

};

const show = async (req, res) => {
  //#swagger.tags = ['Series']
  // Get a single series from mongodb
  getAndSendOne(req, res, Series);
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
