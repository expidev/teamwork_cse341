const routes = require("express").Router();
const myController = require("../controllers/") //it redirects to index.js by default

routes.get("/professional", myController.getData);

module.exports = routes