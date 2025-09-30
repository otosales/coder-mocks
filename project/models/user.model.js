const mongoose = require('../db');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  pets: { type: [String], default: [] }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
