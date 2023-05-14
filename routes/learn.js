const express = require("express");
const router = express.Router();
const learnController = require("../controllers/learn");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Learn Routes
router.get("/", ensureAuth, learnController.getLearn); // "/" -> home route for "/learn"
router.post("/createPost", learnController.createPost);

router.delete("/deletePost/:id", learnController.deletePost);

module.exports = router;
