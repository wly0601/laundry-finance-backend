const jwt = require("jsonwebtoken");

function createToken(payload, privateKey, expiresIn) {
  return jwt.sign(payload, privateKey, expiresIn);
}

module.exports = createToken;