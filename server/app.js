const express = require('express');
const app = express();
const test = require('./Routes/test');

app.use("/test", test);

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));