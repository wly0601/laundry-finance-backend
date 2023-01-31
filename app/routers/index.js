const appRouter = require("./applicationRouter")
const userRouter = require("./userRouter")

function routers(app){
  appRouter(app)
  userRouter(app)
  return app
}

module.exports = routers;