const mogoose = require('mongoose');

const UserSchema = new mogoose.Schema({});

module.exports = mogoose.model('user', UserSchema, 'users');
