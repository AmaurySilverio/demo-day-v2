module.exports = {
  getAbout: async (req, res) => {
    try {
      res.render("about.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
