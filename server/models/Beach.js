const mongoose = require("mongoose");

const BeachSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: mongoose.Schema.Types.ObjectId, ref: "State", },
  location: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  weather: { type: String },
  wind: { type: String },
  waterConditions: { type: String },
  amenities: [{ type: String }],
  bestTimeToVisit: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

module.exports = mongoose.model("Beach", BeachSchema);
