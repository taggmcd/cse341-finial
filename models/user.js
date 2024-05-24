const mogoose = require('mongoose');

const UserSchema = new mogoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{ type: String }], // Array of roles (e.g., 'admin', 'user')
    dob: Date, // Date of birth
    profileImage: String, // URL to profile image
});

module.exports = mogoose.model('user', UserSchema, 'users');
