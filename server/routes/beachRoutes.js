const express = require("express");
const { getBeaches, getBeachById, getAllBeaches } = require("../controllers/beachController");

const router = express.Router();

router.get("/all", getAllBeaches);
// Get all beaches by state ID
router.get("/:stateId", getBeaches);

// Get a particular beach by its ID
router.get("/beach/:id", getBeachById);

module.exports = router;
