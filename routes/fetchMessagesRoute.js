const express = require("express");
const sendMessageController = require("../controllers/fetchMessageController");

const router = express.Router();

router.get("/sendMessage", sendMessageController.fetchMessages);

module.exports = router