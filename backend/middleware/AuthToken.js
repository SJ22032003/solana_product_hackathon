const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const errorHandler = require("./ErrorHandler");

const secret_key = process.env.JWT_SECRET;

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, secret_key);
      req.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      errorHandler(error, req, res, { message: "Not Authorized", status: 402 });
    }
    next();
  }
  if (!token) {
    errorHandler(err, req, res);
  }
};

module.exports = protect;