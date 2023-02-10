const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  return res.render("home");
});

router.get("/admin", (req, res) => {
  return res.render("admin");
});
