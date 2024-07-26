const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  constent: String
})

module.exports = mongoose.model("Message", messageSchema);