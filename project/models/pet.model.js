const mongoose = require('../db');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = mongoose.models.Pet || mongoose.model('Pet', petSchema);
