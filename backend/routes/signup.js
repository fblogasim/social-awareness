const express = require("express");
const { signupHandler } = require("../handlers/signupHandler");

const signupRouter = express.Router();

signupRouter.post("/", signupHandler);

module.exports = {
  signupRouter,
};
