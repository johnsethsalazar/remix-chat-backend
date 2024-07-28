const sendMessageController = require("../controllers/sendMessageController");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    sendMessageController(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}