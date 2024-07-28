const fetchMessageController = require("../controllers/fetchMessageController");

module.exports = async (req, res) => {
  if (req.method === "GET") {
    fetchMessageController(req, res);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}