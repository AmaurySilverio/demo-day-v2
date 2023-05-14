const Card = require("../models/Card");
const Deck = require("../models/Deck");

module.exports = {
  getStudy: async (req, res) => {
    try {
      const deck = await Deck.find({ madeBy: req.user.id });
      const cards = await Card.find({ parentDeck: req.params.id });
      res.render("study.ejs", {
        user: req.user.id,
        deckContainer: deck,
        cards: cards,
      });
      console.log("deck", cards);
    } catch (err) {
      console.log(err);
    }
  },
  createDeck: async (req, res) => {
    try {
      // Upload image to cloudinary
      //const result = await cloudinary.uploader.upload(req.file.path);

      await Deck.create({
        title: req.body.title,
        madeBy: req.user.id,
      });
      console.log("Deck has been added!");
      res.redirect("/study");
    } catch (err) {
      console.log(err);
    }
  },
  createCard: async (req, res) => {
    try {
      // Upload image to cloudinary
      //const result = await cloudinary.uploader.upload(req.file.path);

      await Card.create({
        letter: req.body.letter,
        imageA: req.body.letter,
        imageB: req.body.letter,
        parentDeck: req.params.id,
        madeBy: req.user.id,
      });
      console.log("Card has been added!");
      res.redirect("/study");
    } catch (err) {
      console.log(err);
    }
  },
};
