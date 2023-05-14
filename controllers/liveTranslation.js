module.exports = {
  getLiveTranslation: async (req, res) => {
    try {
      res.render("liveTranslation.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
