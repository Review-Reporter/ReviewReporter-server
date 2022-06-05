const express = require('express');
const mysql = require('../config/db');
const router = express.Router();

router.get("/", async(req, res) => {
  const category = req.query.category;
  const keyword = req.query.keyword;
  const sql = `SELECT p_value1, p_value2, lag_value, isRelated FROM causal_inference WHERE category LIKE '${category}' AND keyword LIKE '${keyword}'`;
  
  const result = await mysql.query(sql);
  
  res.json({
    p_value1: result[0]['p_value1'],
    p_value2: result[0]['p_value2'],
    lag_value: result[0]['lag_value'],
    isRelated: result[0].isRelated
  })
});


module.exports = router;
