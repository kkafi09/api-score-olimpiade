const express = require("express");
const router = express.Router();

const {
  getScores,
  getScore,
  createScore,
  updateScore,
  deleteScore,
} = require("../controllers/scoreController");

// GET all scores
router.get("/", getScores);

// GET single score
router.get("/:id", getScore);

// POST new score
router.post("/", createScore);

// DELETE a score
router.delete("/:id", deleteScore);

// PUT a score
router.put("/", updateScore);

module.exports = router;
