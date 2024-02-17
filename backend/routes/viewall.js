const express = require("express");
const { viewallHandler } = require("../handlers/viewallHandler");

const viewallRouter = express.Router();

viewallRouter.get("/", viewallHandler);

module.exports = {
  viewallRouter,
};
