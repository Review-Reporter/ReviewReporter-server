const express = require('express');
require('dotenv').config({ path: 'config/.env' });

const mysql = require('./config/db.js');
const app = express();

const indexRouter = require('./Routes/index');
const keywordRouter = require('./Routes/keyword');
const reviewRouter = require('./Routes/review');

app.use("/", indexRouter);
app.use("/keyword", keywordRouter);
app.use("/review", reviewRouter);

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/category", async(req, res) => {
  const category = await mysql.query('category');
  console.log(category);
  res.send(category);
})