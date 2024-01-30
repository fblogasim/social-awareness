const express = require("express");
const { loginHandler } = require("../handlers/loginHandler");

const loginRouter = express.Router();

loginRouter.post("/", loginHandler);

module.exports = {
  loginRouter,
};
