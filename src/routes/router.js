const express = require("express");
const auth = require("./auth.routes");
const swagger = require("./swagger.routes");
const users = require('./users.routes');

const app = express();

app.use('/auth/', auth);
app.use('/users/', users);
app.use(swagger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
