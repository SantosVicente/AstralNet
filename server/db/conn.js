const mongoose = require("mongoose");
require('dotenv').config();


async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Conectado ao MongoDB Atlas");
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}

module.exports = main;