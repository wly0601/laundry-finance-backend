const createToken = require("../../plugins/createToken")
const { wrongPasswordError } = require("../../errors")

function loginAsAdmin(req, res){
  try{
    const { password } = req.body
    
    if(password !== process.env.ADMIN_PASSWORD){
      const err = wrongPasswordError()
      res.status(401).json(err);
      return;
    }

    const token = createToken({
      name: process.env.SECRET_PAYLOAD,
    }, process.env.JWT_PRIVATE_KEY || "Token", {
      expiresIn: '1h'
    });

    res.status(200).json({
      token
    });    
  }

  catch(err){
    res.status(400).json({
      status: "ERROR",
      name: err.name,
      message: err.message
    });
  }
}

module.exports = loginAsAdmin