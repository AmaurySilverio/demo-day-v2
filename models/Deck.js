const mongoose = require("mongoose");
const DeckSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  madeBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Deck", DeckSchema);
