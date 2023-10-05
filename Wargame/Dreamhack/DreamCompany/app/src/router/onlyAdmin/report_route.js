const express = require("express");
const path = require("path");
const router = express.Router();
const checkToken = require("../../apis/token/checkToken");

router.use(checkToken, (req, res, next) => {
  next();
});

router.get("/report", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "..", "/pages/html/report.html"));
});

router.post("/send", function (req, res, next) {});

module.exports = router;
