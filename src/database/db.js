const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

module.exports = mongoose;
