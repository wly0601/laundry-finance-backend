const appController = require("../controllers/application")

function appRouter(app){
  app.get("/", appController.getRoot);

  return app
}

module.exports = appRouter