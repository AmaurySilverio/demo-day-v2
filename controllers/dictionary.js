module.exports = {
  getDictionary: async (req, res) => {
    try {
      res.render("dictionary.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
