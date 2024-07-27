const express = require("express");
const sendMessageController = require("../controllers/sendMessageController");

const router = express.Router();

router.post("/", sendMessageController.sendMessage);

module.exports = router