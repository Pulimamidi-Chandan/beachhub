const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  about: { type: String, required: true },
  dob: { type: Date, required: true }, // Date of Birth
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true }, // Gender with predefined options
  nationality: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
