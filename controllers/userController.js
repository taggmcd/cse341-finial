const { response } = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

const index = async (req, res) => {
  //#swagger.tags = ['Users']
  // Get all users from mongodb
};

const show = async (req, res) => {
  //#swagger.tags = ['Users']
  // Get a single user from mongodb
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
};

module.exports = { index, show, store, update, destroy };
