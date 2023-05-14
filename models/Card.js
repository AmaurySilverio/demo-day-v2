const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  letter: {
    type: String,
    required: true,
  },
  imageA: {
    type: String,
    require: true,
  },
  imageB: {
    type: String,
    require: true,
  },
  customImage: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  parentDeck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Deck",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Card", CardSchema);
