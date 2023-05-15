const express = require("express");
const router = express.Router();
const studyController = require("../controllers/study");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Study Routes
router.get("/", ensureAuth, studyController.getStudy);
router.post("/deck", studyController.createDeck);
router.post("/card/:id", studyController.createCard);

// router.delete("/deletePost/:id", learnController.deletePost);

module.exports = router;