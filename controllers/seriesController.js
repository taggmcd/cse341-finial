const { response } = require('express');
const mongoose = require('mongoose');
const Series = require('../models/series');
const { getAndSendAll, getAndSendOne, deleteItemAndSendMessage } = require("./baseController");


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
  // Create a new movie in mongodb
  try {
    const { title, releaseYear, genre, numberOfEpisodes, plotSummary, posterUrl } = req.body;
    const newSeries = new Series({
        title,
        releaseYear,
        genre,
        numberOfEpisodes,
        plotSummary,
        posterUrl,
    });
    const savedSeries = await newSeries.save();
    res.status(201).json(savedSeries);
} catch (error) {
    res.status(500).json({ error: 'Error creating Series' });
}
};

const update = async (req, res) => {
  //#swagger.tags = ['Series']
  // Update a series in mongodb
  const seriesId = req.params.id;
  const { title, releaseYear, genre, numberOfEpisodes, plotSummary, posterUrl } = req.body;
  try {
    const series = await Series.findByIdAndUpdate(seriesId, {title, releaseYear, genre, numberOfEpisodes, plotSummary, posterUrl}, { new: true });
    res.status(204).json(series);
  } catch (error) {
    res.status(400).send(error);
  }
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Series']
  // Delete a series from mongodb
  deleteItemAndSendMessage(req, res, Series);
};

module.exports = { index, show, store, update, destroy };
