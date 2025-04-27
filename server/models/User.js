const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String},
  about: { type: String },
  dob: { type: Date }, // Date of Birth
  gender: { type: String, enum: ["Male", "Female", "Other"] }, // Gender with predefined options
  nationality: { type: String },
  city: { type: String },
  state: { type: String}
});

module.exports = mongoose.model("User", UserSchema);
