const userController = require("../controllers/user")
const { authorization } = require("../middlewares")

function userRouter(app){
  app.post("/user", authorization, userController.register)
  app.post("/login-as-admin", userController.loginAsAdmin)
  return app
}

module.exports = userRouter