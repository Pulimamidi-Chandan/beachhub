const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    imageUrl: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("State", StateSchema);
