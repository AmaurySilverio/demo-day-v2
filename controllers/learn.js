const Learn = require("../models/Learn");

module.exports = {
  getLearn: async (req, res) => {
    try {
      const letters = await Learn.find({ madeBy: req.user.id });
      console.log("Test", letters);
      res.render("learn.ejs", { user: req.user.id, letterContainer: letters });
      console.log("Test2", letters);
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      await Learn.create({
        letters: req.body.letters,
        madeBy: req.user.id,
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
      await Learn.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/learn");
    } catch (err) {
      res.redirect("/learn");
    }
  },
};
