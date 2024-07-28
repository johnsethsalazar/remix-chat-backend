const express = require("express");
const getMessageController = require("../controllers/fetchMessageController");

const router = express.Router();

router.get("/getAllMessages", getMessageController.fetchMessages);

module.exports = router