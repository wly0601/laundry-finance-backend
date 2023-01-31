function wrongPasswordError(res, err){
  return {
    status: "ERROR",
    message: "Password Salah"
  }
}

module.exports = wrongPasswordError