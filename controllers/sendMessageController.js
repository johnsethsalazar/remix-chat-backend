const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  const {message} = req.body;

  try{
    if(!message){
      res.status(400).json({error: "Message required"});
    }

    const result = await Message.create({
      constent: message
    });

    res.status(201).json({success: "Message sent", result});
  }catch(error){
    res.status(500).json({error: error});
  }
}

module.exports = {sendMessage}