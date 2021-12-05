const jwt = require("jsonwebtoken");
// Authentcate the request
const verifyToken = (req, res, next) => {
  let token =
    req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    token = token.replace("Bearer ","")
    console.log("Key ",token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = {
    verifyToken
}