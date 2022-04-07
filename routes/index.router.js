const { Router } = require("express");
const {} = require("../controllers/index.controller");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

indexRouter.get("/greet", (req, res) => {
  res.send("<h1>Hello😊,Bby girl<h1>");
});
module.exports = indexRouter;
