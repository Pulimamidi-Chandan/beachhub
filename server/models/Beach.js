const mongoose = require("mongoose");

const BeachSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: mongoose.Schema.Types.ObjectId, ref: "State", required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    weather: { type: String, required: true },
    wind: { type: String, required: true },
    waterConditions: { type: String, required: true },
    amenities: [{ type: String }],
    bestTimeToVisit: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

module.exports = mongoose.model("Beach", BeachSchema);
