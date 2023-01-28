require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("../config/router");
// const { MORGAN_FORMAT } = require("../config/application");
const app = express();
console.clear();

// const nodeEnv = process.env.NODE_ENV;
// if (!nodeEnv || nodeEnv !== "production") {
//   app.use(morgan(MORGAN_FORMAT));
// }

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;