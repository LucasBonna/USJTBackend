const mongoose = require("mongoose");

const mongo_url = "mongodb+srv://lucasbonna:6qFGs7JY8Lc0YIXN@cluster0.eelgvoj.mongodb.net/"

console.log("MONGO_URL:", mongo_url);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

module.exports = mongoose;
