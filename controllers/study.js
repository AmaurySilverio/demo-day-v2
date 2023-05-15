const Card = require("../models/Card");
const Deck = require("../models/Deck");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  getStudy: async (req, res) => {
    try {
      const _id = ObjectId(req.body._id);
      console.log("id", _id);
      // console.log("res", res);
      const deck = await Deck.find({ madeBy: req.user.id });
      const cards = await Card.find({ parentDeck: deck[0]._id });
      // cards are populated because I hard coded the find parameter to be deck{}0._id. This wont work for any deck other than the first one. I need to make it more dynamic with a for loop perhaps? and turn deck[0] into deck[i] and iterate through the decks that way? is that possible in node.js ??
      console.log("deck", deck);
      console.log("cards", cards);
      res.render("study.ejs", {
        user: req.user.id,
        deckContainer: deck,
        cards: cards,
      });
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
