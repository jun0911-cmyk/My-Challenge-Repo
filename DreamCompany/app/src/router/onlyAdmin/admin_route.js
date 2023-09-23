const express = require("express");
const path = require("path");
const router = express.Router();
const checkToken = require("../../apis/token/checkToken");

router.use(checkToken, (req, res, next) => {
  next();
});

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "..", "/pages/html/admin.html"));
});

router.post("/", function (req, res, next) {});

module.exports = router;
