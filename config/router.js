const express = require("express");
const controllersApplication = require("../app/controllers/application");
const apiRouter = express.Router();

apiRouter.get("/", controllersApplication.getRoot);
// apiRouter.use(controllers.application.handleNotFound);

module.exports = apiRouter;