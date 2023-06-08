const mongoose = require('mongoose');

const sugarLevelSchema = new mongoose.Schema({
  reading: { type: Number, required: true },
  mood: { type: String, required: true },
  type: { type: String, required: true }
});

const SugarLevel = mongoose.model('sugarlevels', sugarLevelSchema);

module.exports = SugarLevel;
