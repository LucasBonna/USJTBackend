const mongoose = require("mongoose");

const mongo_url =
  "mongodb+srv://lucasbonnafavaro:7LyD51Lj6Uc6QXDD@cluster0.c6yekv1.mongodb.net/USJT";

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

module.exports = mongoose;
