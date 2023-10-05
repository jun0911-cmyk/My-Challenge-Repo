const express = require("express");
const path = require("path");
const router = express.Router();
const checkToken = require("../../apis/token/checkToken");

router.use(express.static("../pages/css"));
router.use(express.static("../pages/js"));

router.get("/", checkToken, function (req, res, next) {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "/pages/html/manage.html")
  );
});

router.post("/", function (req, res, next) {});

module.exports = router;
