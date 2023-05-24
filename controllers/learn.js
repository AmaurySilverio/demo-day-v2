const cloudinary = require("../middleware/cloudinary");
const Learn = require("../models/Learn");

module.exports = {
  getLearn: async (req, res) => {
    try {
      // console.log("hello?", { val: req.params.id });
      const arrLetters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      const letters = await Learn.find({ madeBy: req.user.id });
      // console.log("Test", letters);
      res.render("learn.ejs", {
        arrLetters: arrLetters,
        user: req.user.id,
        letterContainer: letters,
        selectedLetter: req.params.id,
      });
      // console.log("Test2", letters);
    } catch (err) {
      console.log(err);
    }
  },
  getCard: async (req, res) => {
    console.log("redsaw", req.params.id);
    const arrLetters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const letters = await Learn.find({
      madeBy: req.user.id,
      letter: req.params.id,
    });
    console.log("letters", letters);
    try {
      res.send(200, {
        arrLetters: arrLetters,
        user: req.user.id,
        letterContainer: letters,
        selectedLetter: req.params.id,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log("booody", req.body);
      await Learn.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        madeBy: req.user.id,
        letter: req.body.letter,
      });
      console.log("Post has been added!");
      res.redirect("/learn");
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Delete post from db
      console.log("deleteId", _id);
      await Learn.remove({ _id: req.params.id });
      console.log("deleteId", _id);
      console.log("Deleted Post");
      res.redirect("/learn");
    } catch (err) {
      res.redirect("/learn");
    }
  },
};
