const express = require('express');
const mysql = require('../config/db');
const router = express.Router();

router.get("/", async(req, res) => {
  const category = req.query.category;
  const sql = `SELECT word, mention FROM keyword WHERE category LIKE '${category}'`;
  
  const keywords = await mysql.query(sql);
  let obj = {};

  keywords.map((keyword) => {
    const { word, mention } = keyword;
    obj[word] = mention
  })

  res.send(obj);
});


module.exports = router;

