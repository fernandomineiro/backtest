module.exports = (app) => {
  const list = require("../controllers/list.controller.js");

  var router = require("express").Router();

  router.get("/encode", list.encode);

  router.get("/decode", list.decode);

  app.use("/api", router);
};
