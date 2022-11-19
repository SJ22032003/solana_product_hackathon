const authRouter = require("express").Router();
const { signup_user, login_user } = require("../controllers/authControllers");

authRouter.post("/signup", signup_user);
authRouter.post("/login", login_user);

module.exports = authRouter;
