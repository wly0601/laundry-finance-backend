require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routers = require("./routers");
const morganFormat = require("../config/morganFormat");
const app = express();
console.clear();

const nodeEnv = process.env.NODE_ENV;
if (!nodeEnv || nodeEnv !== "production") {
  app.use(morgan(morganFormat));
}

app.use(cors());
app.use(express.json());
// app.use(routers);

module.exports = routers(app);