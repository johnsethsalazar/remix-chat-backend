const Message = require("../models/Message");

const fetchMessages = async (req, res) => {

  try{
    //Finds everything in the collection database
    const messages = await Message.find();

    if(!messages) return res.status(204).json({message: "Messages not found"});

    res.json(messages);
  }catch(error){
    res.status(500).json({error: error});
  }
}

module.exports = {fetchMessages}