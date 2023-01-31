const jwt = require("jsonwebtoken");

function decodeToken(token, privateKey){
    return jwt.verify(token, privateKey);
}

module.exports = decodeToken;