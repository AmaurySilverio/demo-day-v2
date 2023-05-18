const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const learnController = require("../controllers/learn");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Learn Routes
router.get("/", ensureAuth, learnController.getLearn); // "/" -> home route for "/learn"
router.post("/createPost", upload.single("file"), learnController.createPost);

router.delete("/deletePost/:id", learnController.deletePost);

module.exports = router;
