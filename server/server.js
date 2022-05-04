const express = require('express');
require('dotenv').config({ path: 'config/.env' });

const cors = require('cors');
const app = express();

const indexRouter = require('./Routes/index');
const keywordRouter = require('./Routes/keyword');
const reviewRouter = require('./Routes/review');

app.use(cors());
app.use("/", indexRouter);
app.use("/keyword", keywordRouter);
app.use("/review", reviewRouter);

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));


