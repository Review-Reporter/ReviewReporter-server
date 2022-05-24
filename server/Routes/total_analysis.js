const express = require('express');
const mysql = require('../config/db');
const router = express.Router();

router.get("/", async(req, res) => {
  const category = req.query.category;
  const sql = `SELECT keyword FROM causal_inference WHERE category LIKE '${category}' AND isRelated is true`;
  
  const keywords = await mysql.query(sql);
  let arr = [];

  keywords.map((keywordObj) => {
    const { keyword } = keywordObj;
    arr.push(keyword);
  })
  res.send(arr);
});


module.exports = router;
