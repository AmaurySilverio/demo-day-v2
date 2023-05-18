const cloudinary = require("../middleware/cloudinary");
const Learn = require("../models/Learn");

module.exports = {
  getLearn: async (req, res) => {
    try {
      const arrLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
      const letters = await Learn.find({ madeBy: req.user.id });
      console.log("Test", letters);
      res.render("learn.ejs", {
        arrLetters: arrLetters,
        user: req.user.id,
        letterContainer: letters,
      });
      console.log("Test2", letters);
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Learn.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
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
