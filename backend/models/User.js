// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  profileImage: {
    type: String,
    default: 'uploads/default-profile.png?url'
  },
  phone: {
    type: String,
    default: ''
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;