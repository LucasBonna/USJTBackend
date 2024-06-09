const express = require("express");
const db = require("./src/database/db");
const router = require("./src/routes/router");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());

const port = process.env.PORT || 3005;

app.use("/api/v1", router);

app.listen(port, function () {
  console.log("API iniciada no http://localhost:" + port);
});
