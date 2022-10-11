const Score = require("../models/scoreModel");

const getScores = async (req, res) => {
  const scores = await Score.find({});

  return res.status(200).json(scores);
};

const getScore = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No score" });
  }

  const score = await Score.findById(id);

  if (!score) {
    return res.status(400).json({ error: "No score found" });
  }

  return res.status(200).json(score);
};

const createScore = async (req, res) => {
  const { name } = req.body;

  try {
    const score = await Score.create({ name });
    return res.status(200).json(score);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteScore = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No score" });
  }

  const score = await Score.findOneAndDelete({ _id: id });

  if (!score) {
    return res.status(400).json({ error: "No score found" });
  }
};

const updateScore = async (req, res) => {
  const { name, score } = req.body;

  const result = await Score.findOneAndUpdate({ name: name }, { ...req.body });

  if (!result) {
    return res.status(200).json({ message: "No data updated" });
  }

  return res.status(200).json(score);
};

module.exports = { getScores, getScore, createScore, deleteScore, updateScore };
