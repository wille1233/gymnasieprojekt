// const crypto = require('crypto');
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use("/", require("./routes/index.js"));

app.listen(8080);
console.log("connected")