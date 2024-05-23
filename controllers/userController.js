const { response } = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const { getAndSendAll, getAndSendOne, deleteItemAndSendMessage } = require("./baseController");

const index = async (req, res) => {
  //#swagger.tags = ['Users']
  // Get all users from mongodb
  getAndSendAll(req, res, User);
};

const show = async (req, res) => {
  //#swagger.tags = ['Users']
  // Get a single user from mongodb
  getAndSendOne(req, res, User);
};

const store = async (req, res) => {
  //#swagger.tags = ['Users']
  // Create a new user in mongodb
};

const update = async (req, res) => {
  //#swagger.tags = ['Users']
  // Update a user in mongodb
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Users']
  // Delete a user from mongodb
  deleteItemAndSendMessage(req, res, User);
};

module.exports = { index, show, store, update, destroy };
