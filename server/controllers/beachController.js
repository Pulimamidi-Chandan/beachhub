const Beach = require("../models/Beach");
const getBeaches = async (req, res) => {
  try {
    const beaches = await Beach.find({ state: req.params.stateId });
    res.json(beaches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getBeachById = async (req, res) => {
  try {
    const beach = await Beach.findById(req.params.id).populate("state");

    if (!beach) {
      return res.status(404).json({ message: "Beach not found" });
    }

    res.json(beach);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
const getAllBeaches = async (req, res) => {
  try {
    const beaches = await Beach.find({});
    res.status(200).json(beaches);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch beaches", error });
  }
};

module.exports = { getBeaches, getBeachById, getAllBeaches };
