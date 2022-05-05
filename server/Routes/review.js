const express = require('express');
const mysql = require('../config/db');
const router = express.Router();

router.get("/", async(req, res) => {
  const category = req.query.category;
  const keyword = req.query.keyword;

  const sql = `SELECT * FROM review WHERE category LIKE '${category}' AND contents LIKE '%${keyword}%'`;

  const reviewData = await mysql.query(sql);
  res.send(reviewData);
});

module.exports = router;