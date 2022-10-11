const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    default: 0,
  },
});

module.exports = mongoose.model("Score", scoreSchema);
