const decodeToken = require("../plugins/decodeToken");
const { 
  noTokenError,
  insufficientAccessError
} = require("../errors")

async function authorize(req, res, next) {
  try {
    if (!req.headers.authorization) {
      const err = noTokenError()
      res.status(401).json(err);
      return;
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    const tokenPayload = decodeToken(
      token,
      process.env.JWT_PRIVATE_KEY || "Token"
    );
    
    const getPayload = await tokenPayload.name

    if(getPayload !== process.env.SECRET_PAYLOAD){
      const err = insufficientAccessError()
      res.status(401).json(err)
      return 
    }

    next();

  } catch (err) {
    res.status(401).json({
      error: "Unauthorized.",
      name: err.name,
      message: err.message
    });
  }
}

module.exports = authorize