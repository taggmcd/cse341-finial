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
  const { firstName, lastName, email, password, roles, dob, profileImage} = req.body;
  try {
    const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    roles,
    dob,
    profileImage
  });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({error: 'Error creating User'});
  }
};

const update = async (req, res) => {
  //#swagger.tags = ['Users']
  // Update a user in mongodb
  const userId = new ObjectId(req.params.id)
  const { firstName, lastName, email, password, roles, dob, profileImage } = req.body;
  try {
    const user = await Movies.findByIdAndUpdate(userId, {firstName, lastName, email, password, roles, dob, profileImage}, { new: true });
    res.status(204).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const destroy = async (req, res) => {
  //#swagger.tags = ['Users']
  // Delete a user from mongodb
  deleteItemAndSendMessage(req, res, User);
};

module.exports = { index, show, store, update, destroy };
