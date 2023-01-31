const { registerNewUser } = require("../../services/user")

async function register(req, res){
  try {
    const { name, address, phoneNumber } = req.body
    const user = await registerNewUser({
      name,
      address,
      phoneNumber,
      downPayment: 0,
    })

    res.status(201).json(user.dataValues);
  } 
  catch(err) {
    res.status(400).json({
      status: "ERROR",
      name: err.name,
      message: err.message
    });
  }   
}

module.exports = register