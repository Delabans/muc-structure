const { Router } = require("express");
const { login, register } = require("../controllers/index.controller");

const usersRouter = Router();

usersRouter.get("/login", (req, res) => {
  res.send("<h1>Hello nany<h1>");
});

module.exports = usersRouter;
