const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "GET Users Endpoint",
  });
});

router.post("/", (req, res) => {
  res.json({
    status: 200,
    message: "POST Users Endpoint",
  });
});

module.exports = router;
