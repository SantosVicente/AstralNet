const mongoose = require("mongoose");
require('dotenv').config();

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect('mongodb+srv://admin:ifsp1234@astral-net.ubu2lt4.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Conectado ao MongoDB Atlas");
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}

module.exports = main;