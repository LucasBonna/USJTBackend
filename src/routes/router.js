const express = require("express");
const auth = require("./auth.routes");
const swagger = require("./swagger.routes");
const users = require('./users.routes');
const task = require("./task.routes")
const authenticateMiddleware = require("../middlewares/authenticateMiddleware");

const app = express();

app.use('/auth/', auth);
app.use(swagger);
app.use(authenticateMiddleware);
app.use('/users/', users);
app.use('/task/', task);


app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
