const mongoose = require("mongoose");

const LearnSchema = new mongoose.Schema({
  letters: {
    type: String,
    required: true,
  },
  madeBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Learn", LearnSchema);
