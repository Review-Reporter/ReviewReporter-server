const express = require('express');
require('dotenv').config({ path: 'config/.env' });

const cors = require('cors');
const app = express();

const indexRouter = require('./Routes/index');
const keywordRouter = require('./Routes/keyword');
const reviewRouter = require('./Routes/review');
const totalAnalysisRouter = require('./Routes/total_analysis');
const analysisRouter = require('./Routes/analysis');

app.use(cors());
app.use("/", indexRouter);
app.use("/api/keyword", keywordRouter);
app.use("/api/review", reviewRouter);
app.use("/api/total_analysis", totalAnalysisRouter);
app.use("/api/analysis", analysisRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));


