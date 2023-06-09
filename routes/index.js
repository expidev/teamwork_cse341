const routes = require("express").Router();
const myController = require("../controllers/index");
routes.get("/profesionnal", myController.getData);

module.export = routes;