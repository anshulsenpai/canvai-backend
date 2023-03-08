const router = require("express").Router();
const generateImage = require("../controllers/openAiController");

router.post("/", generateImage);

module.exports = router;
