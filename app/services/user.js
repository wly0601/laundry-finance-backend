const userRepository = require("../repositories/user")

module.exports = {
  registerNewUser(data){
    return userRepository.create(data)
  }
}